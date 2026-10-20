class InventoryPage {
  title() {
    return cy.get(".title");
  }

  addBackpackToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  addBikeLightToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  }

  cartBadge() {
    return cy.get(".shopping_cart_badge");
  }

  openCart() {
    cy.get(".shopping_cart_link").click();
  }
}

export default InventoryPage;
