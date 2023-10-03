Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent Cypress from failing the test
  return false;
});
describe("Login Test", () => {
  // Visit the website
  before(() => {
    cy.visit("https://sat2farm.com/");
  });

  it("should login ", () => {
    // Set the viewport size
    cy.viewport('macbook-15');

    // Find and fill in the username and password fields
    cy.get('input[type="text"]').type('6383850118');
    cy.get('input[type="password"]').type('sneha@0118');

    // Submit the login form
    cy.get('input[id="submit"]').should('be.visible').click();

    // Wait for the page to load and verify the URL
    cy.url().should('eq', 'https://sat2farm.com/user.php');
    cy.log("Login Successful");

    // Add additional assertions if needed to verify successful login
  });
});
describe("Login Test", () => {
  // Visit the website
  before(() => {
    cy.visit("https://sat2farm.com/");
  });

  it("should login ", () => {
    // Set the viewport size
    cy.viewport('macbook-15');

    // Find and fill in the username and password fields
    cy.get('input[type="text"]').type('9345973182');
    cy.get('input[type="password"]').type('kavya@3182');

    // Submit the login form
    cy.get('input[id="submit"]').should('be.visible').click();

    // Wait for the page to load and verify the URL
    cy.url().should('eq', 'https://sat2farm.com/user.php');
    cy.log("Login Successful");

    // Add additional assertions if needed to verify successful login
  });
});
