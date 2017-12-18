/*globals cy*/

describe("Hello Cypress", () => {
    it("the test page is there", () => {
        cy.visit("/");
        cy.title().should("include", "cypress test");
    });
});
