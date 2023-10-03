// Cypress Test
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe('Login and Interact with Elements Test', () => {
  it('Should login and interact with elements', () => {
    cy.visit('https://sat2farm.com/')
    cy.viewport('macbook-15')
    
    // Locate and fill in the login form
    cy.get('input[type="text"]').type('6383850118');
    cy.get('input[type="password"]').type('sneha@0118');
    
    // Click the login button
    cy.get('#submit').click()
    
    // Verify the login result
    cy.url().should('eq', 'https://sat2farm.com/user.php')
    
    // Click on a specific element
    cy.get('#Farmlist > div:nth-child(2)').click()
        
    cy.get('#map > div > canvas').scrollIntoView();
    cy.wait(5000);      
    // Scroll to NDCI element
      // Scroll to TI element
    cy.get('#tiBtn').scrollIntoView();
    cy.wait(3000);       
    // Click the TI button
    cy.get('#tiBtn').click();
    cy.wait(10000);
    
  });
});