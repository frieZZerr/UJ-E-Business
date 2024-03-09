// cypress/support/e2e.js

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/login');
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('button[type="submit"]').click();
  });
  
  Cypress.Commands.add('logout', () => {
    cy.get('#logout-button').click();
  });
  
  before(() => {
    cy.fixture('users.json').as('users');
  });
