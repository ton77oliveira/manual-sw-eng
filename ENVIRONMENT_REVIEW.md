# Environment Review

## Encontrado

O OpenCode local possui SDD (`devskill-sdd-opencode`), comandos de criação de projeto/spec, integração GitHub, Docker, EasyPanel, Komodo, browser automation e notificações Duda.

## Classificação

- **EXISTENTE / ÚTIL:** `AGENTS.md` como padrão de contexto, specs, memory, tasks, comandos SDD, skills de deploy e política de notificações.
- **REDUNDANTE:** diretórios globais `command/` e `commands/` possuem duplicações; este projeto mantém uma fonte local em `commands/`.
- **PRECISA SER MELHORADO:** há arquivos globais que a auditoria identificou como potencialmente sensíveis. Eles não foram copiados. Revise-os localmente e substitua valores reais por variáveis.
- **FALTANTE no projeto:** web app, base Markdown, integração local, testes e documentação. Este MVP adiciona esses itens.
- **NÃO DISPONÍVEL:** `/novo_server` não pôde ser lido neste ambiente; nenhum dado dele foi inferido ou incorporado.

## Reuso seguro

O instalador apenas copia recursos deste repositório para `.opencode/` do projeto-alvo. Não altera configuração global, não acessa servidor e não instala credenciais.
