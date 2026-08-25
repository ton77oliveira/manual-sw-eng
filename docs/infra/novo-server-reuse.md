# Reuso da Infraestrutura

Este documento registra somente padrões arquiteturais observados no ambiente local. Não contém credenciais, endereços privados, domínios, tokens ou dados de clientes.

## Padrões aprovados

1. **Komodo:** usar como fonte de status e ciclo de deploy quando houver integração autorizada.
2. **Build separado:** construir a imagem em um host com recursos adequados e fazer pull nos ambientes de execução.
3. **Traefik:** preferir roteamento por labels em vez de planilhas de portas.
4. **Tailscale:** administrar serviços internos por rede privada; não confundir conectividade com autenticação.
5. **Compose:** manter a primeira implantação simples e explícita.
6. **Systemd hardening:** usar `NoNewPrivileges`, `ProtectSystem`, limites de memória/CPU e usuário sem privilégios quando aplicável.
7. **Notificações:** publicar eventos curtos, deduplicados e sem segredos; decisões críticas precisam de correlação e confirmação.
8. **Contexto:** manter status, decisões, setup log, memória e pendências versionados, mas sanitizados.

## Integração futura

Uma integração Komodo/Duda deve ser implementada como adaptador opcional, com:

- credenciais somente em `EnvironmentFile` ou secrets do runtime;
- permissões read-only por padrão;
- timeout e retry limitados;
- health check e logs sem payload sensível;
- aprovação humana para produção, migrações, DNS, firewall e exclusões.

O MVP atual não chama APIs de infraestrutura e não altera o servidor.
