/// <reference types="cypress" />

describe('Test', () => {
  it('has hotness', () => {
    cy.visit(Cypress.env('baseUrl'));
    cy.get('h2').should('contain', 'Safareig de la BGG');
    cy.contains('50-');
  });
});
