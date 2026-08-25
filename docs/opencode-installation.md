# Integração OpenCode

```bash
bash scripts/install-opencode.sh /caminho/do/projeto
```

O script instala commands, a skill `technical-mentor` e o agente em `.opencode/` do projeto. Ele não sobrescreve arquivos existentes: use `FORCE=1` somente após revisar o diff. A integração web é opcional e pode ser apontada por `MANUAL_SW_ENF_URL`.

Os recursos globais existentes continuam intactos. Faça backup antes de qualquer customização global.

## Skills existentes

O ambiente local já possui skills de SDD, Komodo, EasyPanel, dashboard e notificações. Este projeto não duplica essas integrações: ele adiciona somente o `technical-mentor` e os commands educacionais locais. Use as skills globais quando o projeto realmente precisar de infraestrutura e nunca copie arquivos de configuração ou tokens para este repositório.
