# Automação E2E com Cypress — Swag Labs

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

Ao terminar, o Cypress mostra no terminal a quantidade de testes aprovados e reprovados e encerra o processo. Se algum teste falhar, confira a mensagem de erro exibida no terminal.

## Integração contínua (GitHub Actions)

O workflow `.github/workflows/cypress.yml` executa os testes automaticamente quando há um push ou pull request para as branches `main` ou `master`. Também pode ser iniciado manualmente na aba **Actions** do GitHub, selecionando **Cypress E2E Tests** e clicando em **Run workflow**.

O workflow instala as dependências com `npm ci` e executa `npm run cy:run`. Consulte a aba [Actions do repositório](https://github.com/priottomarcos7-coder/cypress-swag-labs/actions) para ver o resultado real de cada execução.

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
- O workflow automatiza a execução no GitHub, mas o resultado de cada execução deve ser conferido na aba **Actions**.

## Autoria

Projeto desenvolvido para compor meu portfólio de Engenharia de Qualidade de Software.

**Perfil GitHub:** [priottomarcos7-coder](https://github.com/priottomarcos7-coder)
