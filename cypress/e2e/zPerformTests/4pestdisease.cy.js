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
    cy.wait(7000);  
    // Scroll to the pest and disease element
    cy.get('#pestDiseaseHead').scrollIntoView()
    // Click the pest and disease button
    cy.get('#pestDiseaseBtn').click()
    cy.wait(5000);
    // Scroll to pest details element
    cy.get('#Pest_details').scrollIntoView()
    // Get the list of disease elements
    cy.get('#disease_details > div').should('have.length.greaterThan', 0).then(($elements) => {
      const totalDiseases = $elements.length
      cy.log(`Total Disease: ${totalDiseases}`)
    })
    
    // Get and log the text from disease_details
    cy.get('#disease_details').invoke('text').then((text) => {
      cy.log('DISEASE')
      cy.log('--------')
      cy.log('Crop Age : ' + text)
      cy.log('\n')
    })
    
    // Get the list of pest elements
    cy.get('#Pest_details > div').should('have.length.greaterThan', 0).then(($elements) => {
      const totalPests = $elements.length
      cy.log(`Total Pest: ${totalPests}`)
    })
    
    // Get and log the text from Pest_details
    cy.get('#Pest_details').invoke('text').then((text) => {
      cy.log('PEST')
      cy.log('-----')
      cy.log('Crop Age : ' + text)
      cy.log('\n')
    })
    
    // Calculate and log the time taken
    cy.clock().then((clock) => {
      const duration = clock.elapsed
      cy.log(`Time taken for Crop Calendar: ${duration} ms`)
    })
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
    // Click on a specific element
    cy.get('#Farmlist > div:nth-child(3)').click()
    // Scroll to the canvas element
    cy.get('#map > div > canvas').scrollIntoView()
    // Store the current time
    cy.wait(5000);  
    // Scroll to the pest and disease element
    cy.get('#pestDiseaseHead').scrollIntoView()
    // Click the pest and disease button
    cy.get('#pestDiseaseBtn').click()
    cy.wait(5000);
    // Scroll to pest details element
    cy.get('#Pest_details').scrollIntoView()
    // Get the list of disease elements
    
  })
})