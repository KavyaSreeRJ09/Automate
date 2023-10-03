Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent Cypress from failing the test
  return false;
});
describe('Farm Actions', () => {
  it('Login and perform farm actions', () => {
    // Visit the website
    cy.visit('https://sat2farm.com/');
    cy.viewport('macbook-15'); // Set viewport size to maximize window

    // Fill in the login form
    cy.get('input[type="text"]').type('9843586452');
    cy.get('input[type="password"]').type('kavya@6452');
    cy.get('input[id="submit"]').click();
    cy.wait(7000); // Wait for the login to complete
    
    // Find and interact with farm elements
    cy.get('[id="Farmlist"] > div').each(($farmElement, farmIndex) => {
      cy.log(`Farm ${farmIndex + 1}:`);
      
      // Extract and log farm type
      cy.get($farmElement) 
        .find('#farm_details_section > div.col-md-7 > p:nth-child(2)')
        .invoke('text')
        .then((farmInfo) => {
          cy.log(`Farm Type: ${farmInfo}`);
          
          // Perform actions based on farm type
          if (farmInfo === 'Farm Type: farm') {
            // Click the farm element
            cy.get($farmElement).click();
            cy.wait(7000);

            // Scroll to the map element
            cy.get('#map > div > canvas').scrollIntoView();
            cy.wait(5000);

            // Click the weather button
            cy.get('[id="weatherBtn"]').scrollIntoView().click();
            cy.wait(5000);

            // Scroll to and interact with other elements (Crop Calendar, Pest and Disease, etc.)
            // You can add similar Cypress commands here based on your Selenium actions

          } else if (farmInfo === 'Farm Type: Polyhouse') {
            // Perform actions for Polyhouse farms
            // Similar to the "Farm" section above

          } else if (farmInfo === 'Farm Type: Tank') {
            // Perform actions for Tank farms
            // Similar to the "Farm" section above

          } else if (farmInfo === 'Farm Type: Garden') {
            // Perform actions for Garden farms
            // Similar to the "Farm" section above

          } else {
            cy.log('Unknown Farm Type');
          }
        });
    });
  });
});
