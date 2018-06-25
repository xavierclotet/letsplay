/// <reference types="cypress" />

describe('Firestarter', () => {
  it('has hotness', () => {
    cy.visit('http://localhost:4201');
    cy.get('h2').should('contain', 'Hotness');
    cy.get('.card-picture').as('games');
    cy.get('@games').should($p => {
      expect($p).to.have.length(50);
      expect($p.eq(0)).to.contain('Welcome');
    });
  });
});
