# Automação E2E com Cypress — Swag Labs

Projeto de portfólio para praticar testes end-to-end (E2E) em uma loja virtual de demonstração: [Swag Labs](https://www.saucedemo.com/).

## Objetivo

Automatizar fluxos importantes de uma compra online, validando comportamentos esperados e algumas situações de erro, desde o login até o checkout.

## Tecnologias

- JavaScript
- Cypress
- Node.js e npm
- Git e GitHub

## Cenários automatizados

O projeto contém 9 testes automatizados:

1. Login com credenciais válidas.
2. Exibição de mensagem de erro ao informar senha incorreta.
3. Bloqueio de acesso para usuário bloqueado.
4. Adição de um produto ao carrinho.
5. Conclusão do checkout com dados válidos.
6. Validação de campo obrigatório no checkout quando o primeiro nome não é informado.
7. Adição de dois produtos ao carrinho.
8. Remoção de produto do carrinho.
9. Exibição de erro quando o sobrenome não é informado no checkout.

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
   npm install
   ```

### Abrir a interface do Cypress

Execute:

```bash
npm run cy:open
```

Na janela do Cypress, selecione **E2E Testing**, escolha um navegador e execute o arquivo `swag-labs.cy.js`, localizado em `cypress/e2e/`.

### Executar os testes pelo terminal

Para executar todos os testes em modo headless:

```bash
npm run cy:run
```

Se o Google Chrome estiver instalado, também é possível executar:

```bash
npm run cy:chrome
```

## Usuários de demonstração

O Swag Labs disponibiliza contas de teste na própria tela de login. Este projeto utiliza:

- **Usuário válido:** `standard_user`
- **Usuário bloqueado:** `locked_out_user`
- **Senha de demonstração:** `secret_sauce`

Use essas credenciais apenas no site de demonstração.

## Estrutura do projeto

```text
cypress-swag-labs/
├── cypress/
│   ├── e2e/
│   │   └── swag-labs.cy.js
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
- Para apresentar os resultados em um processo seletivo, execute os testes no seu ambiente e confira o resultado da execução.

## Autoria

Projeto desenvolvido para compor meu portfólio de Engenharia de Qualidade de Software.

**Perfil GitHub:** [priottomarcos7-coder](https://github.com/priottomarcos7-coder)
