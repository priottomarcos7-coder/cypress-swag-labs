import LoginPage from "../pages/login.page";
import InventoryPage from "../pages/inventory.page";
import CartPage from "../pages/cart.page";
import CheckoutPage from "../pages/checkout.page";

describe("Swag Labs - testes end-to-end", () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it("deve permitir login com credenciais válidas", () => {
    loginPage.login("standard_user", "secret_sauce");

    cy.url().should("include", "/inventory.html");
    inventoryPage.title().should("have.text", "Products");
  });

  it("deve exibir mensagem ao informar senha incorreta", () => {
    loginPage.login("standard_user", "senha_incorreta");

    loginPage.errorMessage()
      .should("be.visible")
      .and("contain.text", "Username and password do not match");
  });

  it("deve impedir o login de usuário bloqueado", () => {
    loginPage.login("locked_out_user", "secret_sauce");

    loginPage.errorMessage()
      .should("be.visible")
      .and("contain.text", "Sorry, this user has been locked out");
  });

  it("deve adicionar um produto ao carrinho", () => {
    loginPage.loginAsStandardUser();
    inventoryPage.addBackpackToCart();

    inventoryPage.cartBadge().should("have.text", "1");
    inventoryPage.openCart();

    cartPage.items().should("have.length", 1);
    cartPage.itemNames().should("have.text", "Sauce Labs Backpack");
  });

  it("deve concluir o fluxo de checkout com dados válidos", () => {
    loginPage.loginAsStandardUser();
    inventoryPage.addBackpackToCart();
    inventoryPage.openCart();
    cartPage.startCheckout();

    checkoutPage.fillInformation("Marcos", "Priotto", "85560-000");
    checkoutPage.continue();

    checkoutPage.summary().should("be.visible");
    checkoutPage.finish();
    checkoutPage.confirmationMessage()
      .should("have.text", "Thank you for your order!");
  });

  it("deve validar o campo obrigatório de primeiro nome no checkout", () => {
    loginPage.loginAsStandardUser();
    inventoryPage.addBackpackToCart();
    inventoryPage.openCart();
    cartPage.startCheckout();

    checkoutPage.continue();

    checkoutPage.errorMessage()
      .should("be.visible")
      .and("contain.text", "First Name is required");
  });

  it("deve adicionar dois produtos ao carrinho", () => {
    loginPage.loginAsStandardUser();
    inventoryPage.addBackpackToCart();
    inventoryPage.addBikeLightToCart();

    inventoryPage.cartBadge().should("have.text", "2");
    inventoryPage.openCart();

    cartPage.items().should("have.length", 2);
    cartPage.itemNames().should("contain", "Sauce Labs Backpack");
    cartPage.itemNames().should("contain", "Sauce Labs Bike Light");
  });

  it("deve remover um produto do carrinho", () => {
    loginPage.loginAsStandardUser();
    inventoryPage.addBackpackToCart();
    inventoryPage.openCart();

    cartPage.removeBackpack();

    cartPage.items().should("not.exist");
    cy.get(".shopping_cart_badge").should("not.exist");
  });

  it("deve exibir erro quando o sobrenome não for informado no checkout", () => {
    loginPage.loginAsStandardUser();
    inventoryPage.addBackpackToCart();
    inventoryPage.openCart();
    cartPage.startCheckout();

    checkoutPage.fillInformation("Marcos", undefined, "85560-000");
    checkoutPage.continue();

    checkoutPage.errorMessage()
      .should("be.visible")
      .and("contain.text", "Last Name is required");
  });
});
