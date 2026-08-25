# Quickstart

## Tenho uma ideia. E agora?

1. Crie o projeto e inicialize Git.
2. Abra o OpenCode no diretório.
3. Rode `/discovery` ou registre o problema em `specs/`.
4. Transforme discovery em requirements e specification.
5. Registre decisões relevantes em um ADR.
6. Quebre o trabalho em tasks pequenas.
7. Implemente, teste e revise o diff.
8. Faça commit convencional e abra PR quando aplicável.
9. Valide staging antes de produção.
10. Use `/me_explique` para registrar o que aprendeu.

## Subir a plataforma

```bash
cp .env.example .env
docker compose up -d --build
curl http://localhost:3000/health
```
