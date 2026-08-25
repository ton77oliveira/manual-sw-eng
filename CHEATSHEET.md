# Cheatsheet

## OpenCode

- `/me_explique tema`: explicação contextual, sem modificar código.
- `/me_ensine tema`: aula curta com pré-requisitos e exercício.
- `/por_que decisão`: procura evidências em spec, ADR e código.
- `/aprendi insight`: registra conhecimento explicitamente.

## SDD e Git

`discovery → requirements → specification → architecture → plan → tasks → implementation → tests → review`.

```bash
git switch -c feat/nome
git diff --check
npm test
docker compose up -d --build
git commit -m "feat(scope): descrição"
```

Nunca use force push, delete volumes, migrações destrutivas, DNS ou deploy de produção sem aprovação humana.
