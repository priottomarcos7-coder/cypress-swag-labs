class CartPage {
  items() {
    return cy.get(".cart_item");
  }

  itemNames() {
    return cy.get(".inventory_item_name");
  }

  removeBackpack() {
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
  }

  startCheckout() {
    cy.get('[data-test="checkout"]').click();
  }
}

export default CartPage;
