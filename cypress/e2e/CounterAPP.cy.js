describe("template spec", () => {
  it("should increment the counter when the increment button is clicked", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-test-id="counter"]').should("have.text", " 10 ");

    cy.get('[data-test-id="increment-button"]').click();

    cy.get('[data-test-id="counter"]').should("have.text", " 11 ");
  });

  it("should decrement the counter when the decrement button is clicked", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-test-id="counter"]').should("have.text", " 10 ");

    cy.get('[data-test-id="decrement-button"]').click();

    cy.get('[data-test-id="counter"]').should("have.text", " 9 ");
  });

  it("should reset the counter when the reset button is clicked", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-test-id="counter"]').should("have.text", " 10 ");

    cy.get('[data-test-id="increment-button"]').click();
    cy.get('[data-test-id="counter"]').should("have.text", " 11 ");

    cy.get('[data-test-id="reset-button"]').click();

    cy.get('[data-test-id="counter"]').should("have.text", " 10 ");
  });
});
