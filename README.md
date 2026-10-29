# Projeto CI/CD: pipeline com GitHub Actions

Projeto de estudo de **integração contínua (CI)**. Um pipeline no GitHub Actions valida o back-end de uma aplicação MERN (MongoDB, Express, React e Node) a cada push e a cada pull request.

## O pipeline

Definido em [`.github/workflows/ci.yml`](.github/workflows/ci.yml). Roda em push e pull request nas branches `main` e `develop`, com estas etapas:

1. Checkout do código
2. Configuração do Node.js 18
3. Instalação das dependências do back-end
4. Linter (ESLint) para verificar a qualidade do código
5. Testes automatizados (Jest e Supertest)
6. Notificação de sucesso ou de falha em um canal do Discord, via webhook

## Aplicação usada

A pasta `MERN-Stack-Todo-List-App-master/` contém uma lista de tarefas em MERN, criada a partir de um [tutorial do YouTube](https://youtu.be/qvBZevK1HPo). O foco deste repositório não é a aplicação, e sim o pipeline em volta dela: lint, testes e notificações.

## Como rodar localmente

```bash
cd MERN-Stack-Todo-List-App-master/backend
npm install
npm run lint
npm test
```

## Configuração e segredos

- O webhook do Discord fica no secret `DISCORD_WEBHOOK_URL` do repositório (Settings → Secrets and variables → Actions).
- A conexão com o banco usa a variável de ambiente `MONGO_URI`, lida em `process.env`. Configure-a em um arquivo `.env` local ou nos secrets do ambiente de deploy, nunca no código.

## O que pratiquei

- Montar e depurar um workflow do GitHub Actions, com vários ajustes de caminho e de comando até o pipeline passar.
- Separar configuração e segredos do código com variáveis de ambiente.
- Usar commits no padrão `feat`, `fix` e `ci`, e abrir pull request da branch `develop` para a `main`.

## Autor

**Filipe Borja Freitas Silva** · [GitHub](https://github.com/iTzB0r) · [LinkedIn](https://linkedin.com/in/filipe-borja-data)
