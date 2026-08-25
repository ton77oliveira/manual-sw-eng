import http from 'node:http';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'app', 'public');
const knowledgeDir = path.resolve(root, process.env.KNOWLEDGE_DIR || 'knowledge');
const projectsDir = path.resolve(root, process.env.PROJECTS_DIR || 'projects');
const port = Number(process.env.PORT || 3000);
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml' };

async function walk(dir, base = dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => []);
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full, base));
    else if (entry.name.endsWith('.md')) files.push({ path: path.relative(base, full), full });
  }
  return files;
}
function markdown(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/^### (.*)$/gm, '<h3>$1</h3>').replace(/^## (.*)$/gm, '<h2>$1</h2>').replace(/^# (.*)$/gm, '<h1>$1</h1>')
    .replace(/```mermaid\n([\s\S]*?)```/g, '<div class="mermaid">$1</div>').replace(/```[\s\S]*?```/g, '')
    .replace(/^[-*] (.*)$/gm, '<li>$1</li>').replace(/\n\n/g, '<p>');
}
async function documents() {
  const files = [...await walk(knowledgeDir), ...await walk(projectsDir)];
  return Promise.all(files.map(async ({ path: relative, full }) => {
    const content = await fs.readFile(full, 'utf8');
    return { id: relative, title: (content.match(/^# (.+)$/m) || [])[1] || relative, content, scope: full.startsWith(projectsDir) ? 'project' : 'global' };
  }));
}
function json(res, value, status = 200) { res.writeHead(status, { 'content-type': 'application/json; charset=utf-8' }); res.end(JSON.stringify(value)); }
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    if (url.pathname === '/health') return json(res, { status: 'ok' });
    if (url.pathname === '/api/documents') {
      const query = (url.searchParams.get('q') || '').toLowerCase();
      const docs = (await documents()).filter(d => !query || `${d.title} ${d.content} ${d.id}`.toLowerCase().includes(query));
      return json(res, docs.map(({ content, ...doc }) => doc));
    }
    if (url.pathname.startsWith('/api/documents/')) {
      const id = decodeURIComponent(url.pathname.slice('/api/documents/'.length));
      const doc = (await documents()).find(d => d.id === id);
      return doc ? json(res, { ...doc, html: markdown(doc.content) }) : json(res, { error: 'Documento não encontrado' }, 404);
    }
    if (url.pathname === '/' || url.pathname === '/index.html') return fs.readFile(path.join(publicDir, 'index.html')).then(body => { res.writeHead(200, { 'content-type': types['.html'] }); res.end(body); });
    const safe = path.normalize(url.pathname).replace(/^([.][.][/\\])+/, '');
    const file = path.join(publicDir, safe);
    const body = await fs.readFile(file); res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' }); res.end(body);
  } catch (error) { json(res, { error: 'Erro interno' }, 500); console.error(error.message); }
});
server.listen(port, '0.0.0.0', () => console.log(`Manual SW ENG em http://localhost:${port}`));
