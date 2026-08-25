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

## Revisão de `/home/falcon9/projetos/novo_server`

### EXISTENTE / ÚTIL PARA O NOVO SISTEMA

- **Orquestração:** Komodo funciona como control plane, com agentes nos hosts e stacks Docker/Compose.
- **Build e deploy:** builds concentrados no host de desenvolvimento, registry privado e hosts de staging/produção responsáveis por pull e restart.
- **Rede:** Traefik como proxy reverso e Tailscale como rede de administração; serviços web devem ter bind restrito e autenticação antes de exposição externa.
- **Operação:** `PROJECT_STATUS.md`, `DECISOES.md`, `SETUP_LOG.md` e `memory/PROJECT_CONTEXT.md` formam um padrão forte de contexto, histórico, decisões e pendências.
- **Automação:** scripts shell, unidades systemd com hardening, health checks e contenção de processos são bons candidatos a templates de runbook.
- **Notificações:** `duda-notify` possui eventos padronizados, deduplicação em SQLite e separação entre produtores confiáveis e canal WhatsApp.
- **LLM e aprendizagem:** OpenClaw usa memória local e skills com credenciais em `EnvironmentFile`; essa separação deve ser mantida.

### PRECISA SER MELHORADO

- O diretório contém credenciais explícitas, tokens, senhas, exports de ambientes, dumps de banco e arquivos compactados operacionais no mesmo espaço da documentação.
- Alguns documentos históricos registram detalhes de acesso e infraestrutura que não devem entrar em um repositório de playbook ou em relatórios.
- Backups de volumes persistentes e renovação de certificados aparecem como pendências operacionais e devem ganhar runbooks, retenção e teste de restore.
- Serviços restritos à rede privada ainda precisam de autenticação/proxy TLS antes de qualquer publicação além da rede de administração.

### FALTANTE PARA ESTE PROJETO

- Conector seguro para eventos Duda, usando somente variáveis de ambiente e sem enviar logs brutos.
- Integração opcional com Komodo para status de build/deploy, sempre read-only no MVP.
- Runbooks sanitizados de backup, restore, health check e rollback.
- Testes de contrato para comandos OpenCode e ingestão de conhecimento.

### NÃO REUTILIZAR

Não copiar `CREDENCIAIS.md`, `TOKENS.md`, `SETUP_LOG.md` com dados de acesso, snapshots DNS, exports, dumps, arquivos `.tar.gz`, chaves SSH, endpoints privados ou qualquer conteúdo de clientes. O inventário serviu somente para identificar padrões, não para importar dados.
