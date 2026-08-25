# Segurança

- Use `.env` local e nunca versione secrets.
- Separe `knowledge/` global de `projects/` privado; não promova conteúdo de clientes automaticamente.
- A aplicação atual é single-user e não deve ser exposta diretamente à Internet.
- Exija revisão humana para produção, migrações destrutivas, DNS, firewall, permissões, secrets, volumes e force push.
- Faça validação, controle de acesso, rate limiting e logs antes de transformar o MVP em serviço multiusuário.
