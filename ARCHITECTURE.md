# Arquitetura

O MVP usa um servidor Node.js nativo, sem framework ou banco externo. Markdown é a fonte de verdade; o servidor indexa `knowledge/` e `projects/` em cada consulta. Isso reduz operação e mantém exportação/backup trivial.

```mermaid
flowchart LR
 O[OpenCode commands] --> M[Markdown]
 M --> S[Node HTTP API]
 S --> W[Web App]
 S --> B[Busca textual]
```

Não há autenticação na primeira versão. A fronteira de segurança é a rede/proxy: rode localmente ou atrás de VPN, basic auth/OIDC e TLS. SQLite, embeddings, fila e search engine ficam adiados até volume real justificar.
