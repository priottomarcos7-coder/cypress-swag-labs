# Automação E2E com Cypress — Swag Labs

[![Cypress E2E Tests](https://github.com/priottomarcos7-coder/cypress-swag-labs/actions/workflows/cypress.yml/badge.svg?branch=main)](https://github.com/priottomarcos7-coder/cypress-swag-labs/actions/workflows/cypress.yml)

Projeto de portfólio para praticar testes end-to-end (E2E) em uma loja virtual de demonstração: [Swag Labs](https://www.saucedemo.com/).

## Objetivo

Automatizar fluxos importantes de uma compra online, validando comportamentos esperados e situações de erro, desde o login até o checkout.

## Tecnologias

- JavaScript
- Cypress
- Node.js e npm
- Git e GitHub
- GitHub Actions para execução automatizada dos testes

## Cenários automatizados

O projeto contém 9 testes automatizados:

1. Login com credenciais válidas.
2. Exibição de mensagem de erro ao informar senha incorreta.
3. Bloqueio de acesso para usuário bloqueado.
4. Adição de um produto ao carrinho.
5. Conclusão do checkout com dados válidos.
6. Validação do campo obrigatório de primeiro nome no checkout.
7. Adição de dois produtos ao carrinho.
8. Remoção de produto do carrinho.
9. Exibição de erro quando o sobrenome não é informado no checkout.

## Organização do código

Os testes utilizam o padrão **Page Objects**: os seletores e as ações de cada tela ficam em arquivos separados, enquanto o arquivo de teste descreve os cenários. Isso reduz a repetição e facilita futuras alterações.

- `cypress/pages/login.page.js`: ações da tela de login.
- `cypress/pages/inventory.page.js`: ações da página de produtos.
- `cypress/pages/cart.page.js`: ações do carrinho.
- `cypress/pages/checkout.page.js`: ações do checkout.
- `cypress/e2e/swag-labs.cy.js`: os 9 cenários automatizados.

## Pré-requisitos

- Node.js em versão LTS instalado.
- npm, incluído com o Node.js.
- Acesso à internet para abrir o Swag Labs e instalar as dependências.

## Como instalar e executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/priottomarcos7-coder/cypress-swag-labs.git
   ```

2. Entre na pasta do projeto:

   ```bash
   cd cypress-swag-labs
   ```

3. Instale as dependências:

   ```bash
   npm ci
   ```

   Se o comando `npm ci` apresentar erro por causa de dependências locais, use `npm install`.

### Abrir a interface do Cypress

Execute:

```bash
npm run cy:open
```

Na janela do Cypress, selecione **E2E Testing**, escolha um navegador e execute `swag-labs.cy.js`, localizado em `cypress/e2e/`.

### Executar os testes pelo terminal

Para executar todos os testes em modo headless (sem abrir a janela do navegador):

```bash
npm run cy:run
```

Se o Google Chrome estiver instalado, também é possível executar:

```bash
npm run cy:chrome
```

Ao terminar, o Cypress mostra no terminal a quantidade de testes aprovados e reprovados e encerra o processo.

## Relatórios e evidências

Ao executar os testes em modo headless com `npm run cy:run`, o projeto gera um relatório HTML com o resumo da execução e o status de cada cenário:

```text
cypress/reports/index.html
```

Se um teste falhar durante uma execução headless, o Cypress captura automaticamente uma screenshot. As imagens são salvas em:

```text
cypress/screenshots/
```

Essas pastas são geradas durante a execução e não precisam ser adicionadas ao Git. No GitHub Actions, o relatório HTML e as screenshots disponíveis são publicados como um artefato cujo nome começa com **cypress-relatorio-e-screenshots-**, seguido do número da execução. Para acessá-los, abra a aba [Actions](https://github.com/priottomarcos7-coder/cypress-swag-labs/actions), selecione uma execução concluída e baixe a seção **Artifacts**. Os artefatos ficam disponíveis por 7 dias.

## Integração contínua (GitHub Actions)

O workflow `.github/workflows/cypress.yml` executa os testes automaticamente quando há um push ou pull request para as branches `main` ou `master`. Também pode ser iniciado manualmente na aba **Actions** do GitHub, selecionando **Cypress E2E Tests** e clicando em **Run workflow**.

O workflow instala as dependências com `npm ci`, executa `npm run cy:run` e tenta publicar o relatório e as screenshots mesmo quando os testes falham. Consulte a aba [Actions do repositório](https://github.com/priottomarcos7-coder/cypress-swag-labs/actions) para ver o resultado real de cada execução.

## Usuários de demonstração

O Swag Labs disponibiliza contas de teste na própria tela de login. Este projeto utiliza:

- **Usuário válido:** `standard_user`
- **Usuário bloqueado:** `locked_out_user`
- **Senha de demonstração:** `secret_sauce`

Use essas credenciais apenas no site de demonstração.

## Estrutura do projeto

```text
cypress-swag-labs/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── e2e/
│   │   └── swag-labs.cy.js
│   ├── pages/
│   │   ├── cart.page.js
│   │   ├── checkout.page.js
│   │   ├── inventory.page.js
│   │   └── login.page.js
│   └── support/
│       └── e2e.js
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```

## Observações

- Os testes dependem da disponibilidade do site público de demonstração.
- Os dados preenchidos no checkout são fictícios e utilizados apenas para teste.
- O relatório HTML é gerado nas execuções em modo headless; as screenshots são capturadas automaticamente quando um teste falha nesse modo.
- O workflow automatiza a execução no GitHub, mas o resultado de cada execução deve ser conferido na aba **Actions**.

## Autoria

Projeto desenvolvido para compor meu portfólio de Engenharia de Qualidade de Software.

**Perfil GitHub:** [priottomarcos7-coder](https://github.com/priottomarcos7-coder)

---

# English Version

# E2E Test Automation with Cypress — Swag Labs

[![Cypress E2E Tests](https://github.com/priottomarcos7-coder/cypress-swag-labs/actions/workflows/cypress.yml/badge.svg?branch=main)](https://github.com/priottomarcos7-coder/cypress-swag-labs/actions/workflows/cypress.yml)

Portfolio project for practicing end-to-end (E2E) testing on a demo online store: [Swag Labs](https://www.saucedemo.com/).

## Goal

Automate important online shopping flows and validate expected behavior and error scenarios, from login through checkout.

## Technologies

- JavaScript
- Cypress
- Node.js and npm
- Git and GitHub
- GitHub Actions for automated test execution

## Automated Scenarios

The project contains 9 automated tests:

1. Log in with valid credentials.
2. Display an error message when an incorrect password is entered.
3. Deny access to a locked-out user.
4. Add a product to the cart.
5. Complete checkout with valid information.
6. Validate the required first-name field during checkout.
7. Add two products to the cart.
8. Remove a product from the cart.
9. Display an error when the last name is missing during checkout.

## Code Organization

The tests use the **Page Object** pattern: selectors and actions for each page are kept in separate files, while the test file describes the scenarios. This reduces duplication and makes future changes easier.

- `cypress/pages/login.page.js`: login page actions.
- `cypress/pages/inventory.page.js`: product page actions.
- `cypress/pages/cart.page.js`: cart actions.
- `cypress/pages/checkout.page.js`: checkout actions.
- `cypress/e2e/swag-labs.cy.js`: the 9 automated scenarios.

## Prerequisites

- Node.js LTS installed.
- npm, included with Node.js.
- Internet access to open Swag Labs and install dependencies.

## Installation and Execution

1. Clone the repository:

   ```bash
   git clone https://github.com/priottomarcos7-coder/cypress-swag-labs.git
   ```

2. Navigate to the project folder:

   ```bash
   cd cypress-swag-labs
   ```

3. Install dependencies:

   ```bash
   npm ci
   ```

   If `npm ci` fails because of local dependency issues, use `npm install`.

### Open the Cypress UI

Run:

```bash
npm run cy:open
```

In the Cypress window, select **E2E Testing**, choose a browser, and run `swag-labs.cy.js` from `cypress/e2e/`.

### Run Tests from the Terminal

To run all tests in headless mode (without opening the browser window):

```bash
npm run cy:run
```

If Google Chrome is installed, you can also run:

```bash
npm run cy:chrome
```

When finished, Cypress displays the number of passed and failed tests in the terminal and exits.

## Reports and Evidence

When tests run in headless mode with `npm run cy:run`, the project generates an HTML report summarizing the run and the status of each scenario:

```text
cypress/reports/index.html
```

If a test fails during a headless run, Cypress automatically captures a screenshot. Images are saved to:

```text
cypress/screenshots/
```

These folders are generated during execution and do not need to be committed to Git. In GitHub Actions, the HTML report and available screenshots are published as an artifact whose name starts with **cypress-relatorio-e-screenshots-**, followed by the run number. To access them, open the [Actions tab](https://github.com/priottomarcos7-coder/cypress-swag-labs/actions), select a completed run, and download the **Artifacts** section. Artifacts are available for 7 days.

## Continuous Integration (GitHub Actions)

The `.github/workflows/cypress.yml` workflow runs tests automatically when a push or pull request targets the `main` or `master` branches. It can also be started manually from the GitHub **Actions** tab by selecting **Cypress E2E Tests** and clicking **Run workflow**.

The workflow installs dependencies with `npm ci`, runs `npm run cy:run`, and attempts to publish the report and screenshots even if tests fail. Check the repository's [Actions tab](https://github.com/priottomarcos7-coder/cypress-swag-labs/actions) to see the actual result of each run.

## Demo Users

Swag Labs provides test accounts on its login page. This project uses:

- **Valid user:** `standard_user`
- **Locked-out user:** `locked_out_user`
- **Demo password:** `secret_sauce`

Use these credentials only on the demo website.

## Project Structure

```text
cypress-swag-labs/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── e2e/
│   │   └── swag-labs.cy.js
│   ├── pages/
│   │   ├── cart.page.js
│   │   ├── checkout.page.js
│   │   ├── inventory.page.js
│   │   └── login.page.js
│   └── support/
│       └── e2e.js
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
└── README.md
```

## Notes

- The tests depend on the public demo website being available.
- Checkout information is fictional and used for testing only.
- The HTML report is generated during headless runs; screenshots are captured automatically when a test fails in that mode.
- The workflow automates execution on GitHub, but the result of each run should be checked in the **Actions** tab.

## Author

Project developed as part of my Software Quality Engineering portfolio.

**GitHub profile:** [priottomarcos7-coder](https://github.com/priottomarcos7-coder)
