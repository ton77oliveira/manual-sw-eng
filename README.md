# Manual SW ENG

Personal Engineering Operating System: playbook, base de conhecimento e integração segura com OpenCode.

## Status

- **IMPLEMENTED:** web app, busca textual, Markdown, Mermaid, projetos, knowledge base, ingestão local, Docker, backup, commands e documentação base.
- **PARTIALLY IMPLEMENTED:** integração OpenCode via comandos e script de instalação; classificação automática depende do agente/LLM configurado.
- **PLANNED:** autenticação multiusuário, busca semântica, WhatsApp e analytics.

## Instalação rápida

```bash
git clone https://github.com/ton77oliveira/manual-sw-eng.git manual-sw-eng
cd manual-sw-eng
cp .env.example .env
docker compose up -d --build
```

Acesse `http://localhost:3000`. Sem Docker: `node app/server.js`.

Para integrar ao OpenCode do projeto atual, execute `bash scripts/install-opencode.sh /caminho/do/projeto`.

## Estrutura

`app/` contém a aplicação; `knowledge/` e `projects/` são Markdown portátil; `commands/`, `skills/` e `agents/` são extensões isoladas; `docs/` contém o playbook detalhado.

Leia `QUICKSTART.md`, `WORKFLOW.md` e `ENVIRONMENT_REVIEW.md` antes de adaptar o sistema.

## Segurança

Este repositório não deve conter `.env`, tokens, chaves SSH, cookies ou dados de clientes. A aplicação não tem autenticação na primeira versão: publique-a somente atrás de uma rede privada ou proxy autenticado.
