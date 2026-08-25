# Deployment

## Docker

```bash
cp .env.example .env
docker compose up -d --build
docker compose logs -f
```

Publique somente atrás de proxy autenticado e TLS. O volume de `knowledge/` e `projects/` deve entrar no backup.

## Backup e restore

```bash
tar -czf manual-sw-eng-backup-$(date +%F).tgz knowledge projects .env.example
tar -xzf manual-sw-eng-backup-AAAA-MM-DD.tgz
```

Não inclua `.env` em backups compartilhados. Health check: `GET /health`.
