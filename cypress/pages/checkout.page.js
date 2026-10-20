class CheckoutPage {
  fillInformation(firstName, lastName, postalCode) {
    if (firstName !== undefined) {
      cy.get('[data-test="firstName"]').clear().type(firstName);
    }
    if (lastName !== undefined) {
      cy.get('[data-test="lastName"]').clear().type(lastName);
    }
    if (postalCode !== undefined) {
      cy.get('[data-test="postalCode"]').clear().type(postalCode);
    }
  }

  continue() {
    cy.get('[data-test="continue"]').click();
  }

  errorMessage() {
    return cy.get('[data-test="error"]');
  }

  summary() {
    return cy.get(".checkout_summary_container");
  }

  finish() {
    cy.get('[data-test="finish"]').click();
  }

  confirmationMessage() {
    return cy.get(".complete-header");
  }
}

export default CheckoutPage;
