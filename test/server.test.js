import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';

test('health endpoint responde ok', async () => {
  const child = spawn(process.execPath, ['app/server.js'], { env: { ...process.env, PORT: '3456' } });
  await new Promise(resolve => setTimeout(resolve, 150));
  const response = await fetch('http://localhost:3456/health');
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: 'ok' });
  child.kill();
});
