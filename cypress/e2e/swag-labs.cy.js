describe("Swag Labs - testes end-to-end", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("deve permitir login com credenciais válidas", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("have.text", "Products");
  });

  it("deve exibir mensagem ao informar senha incorreta", () => {
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("senha_incorreta");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain.text", "Username and password do not match");
  });

  it("deve impedir o login de usuário bloqueado", () => {
    cy.get('[data-test="username"]').type("locked_out_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain.text", "Sorry, this user has been locked out");
  });

  it("deve adicionar um produto ao carrinho", () => {
    login();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("have.text", "1");
    cy.get(".shopping_cart_link").click();

    cy.get(".cart_item").should("have.length", 1);
    cy.get(".inventory_item_name").should("have.text", "Sauce Labs Backpack");
  });

  it("deve concluir o fluxo de checkout com dados válidos", () => {
    login();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type("Marcos");
    cy.get('[data-test="lastName"]').type("Priotto");
    cy.get('[data-test="postalCode"]').type("85560-000");
    cy.get('[data-test="continue"]').click();

    cy.get(".checkout_summary_container").should("be.visible");
    cy.get('[data-test="finish"]').click();
    cy.get(".complete-header").should("have.text", "Thank you for your order!");
  });

  it("deve validar campos obrigatórios do checkout", () => {
    login();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain.text", "First Name is required");
  });


  it("deve adicionar dois produtos ao carrinho", () => {
    login();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    cy.get(".shopping_cart_badge").should("have.text", "2");
    cy.get(".shopping_cart_link").click();

    cy.get(".cart_item").should("have.length", 2);
    cy.contains(".inventory_item_name", "Sauce Labs Backpack")
      .should("be.visible");
    cy.contains(".inventory_item_name", "Sauce Labs Bike Light")
      .should("be.visible");
  });

  it("deve remover um produto do carrinho", () => {
    login();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();

    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    cy.get(".cart_item").should("not.exist");
    cy.get(".shopping_cart_badge").should("not.exist");
  });

  it("deve exibir erro quando o sobrenome não for informado no checkout", () => {
    login();

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type("Marcos");
    cy.get('[data-test="postalCode"]').type("85560-000");
    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain.text", "Last Name is required");
  });

});

function login() {
  cy.get('[data-test="username"]').type("standard_user");
  cy.get('[data-test="password"]').type("secret_sauce");
  cy.get('[data-test="login-button"]').click();
  cy.url().should("include", "/inventory.html");
}
