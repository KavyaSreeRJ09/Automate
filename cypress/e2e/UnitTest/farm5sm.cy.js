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
    
    // Click on a specific element
    cy.get('#Farmlist > div:nth-child(1)').click()
    
    // Scroll to the canvas element
    cy.get('#map > div > canvas').scrollIntoView()
    
    // Store the current time
    cy.clock()
    
    // Scroll to the "Soil Moisture" element
    cy.get('#smHead').scrollIntoView()
    
    // Click the "Soil Moisture" button
    cy.get('#smHead').click()
    
    // Wait for the "Soil Moisture" data to load (adjust the wait time as needed)
    cy.wait(20000) // Wait for 20 seconds for the data to load
    
    // Output a new line
    cy.log('\n')
    
    // Calculate and log the time taken
    cy.clock().then((clock) => {
      const duration = clock.elapsed
      cy.log(`Time taken for Soil Moisture: ${duration} ms`)
    })
  })
})