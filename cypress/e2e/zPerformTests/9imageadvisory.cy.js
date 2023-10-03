Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent Cypress from failing the test
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
    
    cy.get('#Farmlist > div:nth-child(1)').click()
    cy.get('#map > div > canvas').scrollIntoView()
    cy.get('#weatherHead').scrollIntoView()
    cy.get('#ndviHead').scrollIntoView()
    cy.get('#saviAccordion').scrollIntoView()
    cy.wait(10000) 

    cy.scrollTo('bottom');
    cy.get('#imageAdvBtn').click()
    cy.get('#imageAdvBtn').click() 

    cy.scrollTo(0, 1000);
    cy.wait(10000) 
    
  })
})
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
    cy.scrollTo(0, 500);
    // Click on a specific element
    cy.get('#Farmlist > div:nth-child(1)').click()
    cy.get('#map > div > canvas').scrollIntoView()
    cy.get('#weatherHead').scrollIntoView()
    cy.get('#ndviHead').scrollIntoView()
    cy.get('#saviAccordion').scrollIntoView()
    cy.wait(10000) 

    cy.scrollTo('bottom');
    cy.get('#imageAdvBtn').click()
    cy.get('#imageAdvBtn').click() 

    cy.scrollTo(0, 1000);
    cy.wait(10000) // Wait for 10 seconds for the data to load
    
  })
})

