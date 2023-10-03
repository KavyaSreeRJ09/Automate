Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent Cypress from failing the test
  return false;
});
describe('Your Test Suite Name', () => {
  it('Should perform actions on the website', () => {
    // Visit the website
    cy.visit('https://sat2farm.com/');

    // Maximize the window (Cypress does not support this natively, use viewport)
    cy.viewport(1920, 1080);

    // Locate and fill in the login form
    cy.get('input[type="text"]').type('9843586452');
    cy.get('input[type="password"]').type('kavya@6452');

    // Click the login button
    cy.get('#submit').click();

    // Wait for the login to complete (adjust the timeout as needed)
    cy.wait(7000);

    // Find the list of farms
    cy.get('#Farmlist > div').each(($farmElement, index) => {
      // Click the farm element to show within data
      cy.wrap($farmElement).click();

      // Wait for the farm details to load (adjust the timeout as needed)
      cy.wait(7000);

      // Extract farm type within the loop
      cy.get('#farm_details_section > div.col-md-7 > p:nth-child(2)', { timeout: 10000 }) // Increase timeout if needed
        .invoke('text')
        .then((farmInfo) => {
          cy.log(`Farm ${index + 1} - Farm Type: ${farmInfo}`);
          // Perform actions based on farm type
          if (farmInfo.includes('Farm Type: farm')) {
            // Scroll to the map element
            cy.get('#map > div > canvas').scrollIntoView();
            cy.get('#weatherBtn').scrollIntoView().click();
            cy.wait(5000);
            // Example: Clicking Crop Calendar button
            cy.get('#cropCalHead').scrollIntoView().wait(3000);
            cy.get('#cropCalBtn').click().wait(7000);
            cy.get('#cropCalContent > div').scrollIntoView().wait(5000);
            cy.get('#popup-button').click().wait(5000);
            cy.get('#popup-overlay > div > button').click().wait(7000);      
            // Scroll to pest and disease element
            cy.get('#pestDiseaseHead').scrollIntoView().wait(3000);
            cy.get('#pestDiseaseBtn').click().wait(7000);  
            // Scroll to pest details
            cy.get('#Pest_details').scrollIntoView().wait(7000);     
            // Soil Moisture
            cy.get('#smHead').scrollIntoView().wait(3000);
            cy.get('#smHead').click().wait(5000);
            cy.get('#SM').wait(10000);      
            // NDVI
            cy.get('#ndviBtn').scrollIntoView().wait(3000);
            cy.get('#ndviBtn').click().wait(7000);
            cy.get('#NDVI > div:nth-child(2) > div > div').scrollIntoView().wait(10000);      
            // LSWI
            cy.get('#lswiHead').scrollIntoView().wait(3000);
            cy.get('#lswiBtn').click().wait(7000);
            cy.get('#LSWI').scrollIntoView().wait(10000);     
            // Irrigation
            cy.get('#irrigationBtn').scrollIntoView().wait(3000);
            cy.get('#irrigationBtn').click().wait(7000);
            cy.get('#irrigationContent > div').scrollIntoView().wait(10000);      
            // Image Advisory
            cy.get('#imageAdvBtn').click().wait(7000);
            cy.get('#image_advisory_card').scrollIntoView().wait(10000);    
            // Soil Reports
            cy.get('#soilRepBtn').scrollIntoView().wait(2000);
            cy.get('#soilRepHead').scrollIntoView().wait(3000);
            cy.get('#soilRepBtn').click().wait(7000);
            cy.get('#soilReports > div').scrollIntoView().wait(10000);
            // Perform other actions specific to "Farm" type
          } 
          if (farmInfo.includes('Farm Type: tank')) {
            // Scroll to the map element
            cy.get('#map > div > canvas').scrollIntoView();
            cy.wait(5000);      
            // Scroll to NDCI element
            cy.get('#ndciHead').scrollIntoView();
            cy.wait(3000);       
            // Click the NDCI button
            cy.get('#ndciBtn').click();
            cy.wait(7000);         
            // Scroll to NDTI element
            cy.get('#ndtiHead').scrollIntoView();
            cy.wait(3000);         
            // Click the NDTI button
            cy.get('#ndtiBtn').click();
            cy.wait(7000);       
            // Scroll to TI element
            cy.get('#tiBtn').scrollIntoView();
            cy.wait(3000);       
            // Click the TI button
            cy.get('#tiBtn').click();
            cy.wait(10000);
          }
          if (farmInfo.includes('Farm Type: polyhouse')) {
            // Perform actions specific to "Polyhouse" type
            // Scroll to the map element
            cy.get('#map > div > canvas').scrollIntoView();
            cy.wait(5000); // Wait for 5 seconds
            // Click on an element (b) and wait for its action
            cy.get('#weatherBtn').click();
            cy.wait(5000); // Wait for 5 seconds
            // Scroll to an element (element) and wait for it to scroll into view
            cy.get('#weather-stats').scrollIntoView();
            cy.wait(5000); // Wait for 5 seconds
            // Click on an element (c) and wait for its action
            cy.get('#cropCalBtn').click();
            cy.wait(7000); // Wait for 7 seconds
            // Scroll to an element (element) and wait for it to scroll into view
            cy.get('#cropCalContent > div').scrollIntoView();
            cy.wait(7000); // Wait for 7 seconds
            // Click on elements (c, c) and wait for their actions
            cy.get('#popup-button').click();
            cy.wait(5000); // Wait for 5 seconds
            cy.get('#popup-overlay > div > button').click();
            cy.wait(7000); // Wait for 7 seconds
            // Click on an element (d) and wait for its action
            cy.get('#pestDiseaseBtn').click();
            cy.wait(7000); // Wait for 7 seconds
            // Scroll to an element (element) and wait for it to scroll into view
            cy.get('#pest_ima').scrollIntoView();
            cy.wait(5000); // Wait for 5 seconds
          } 
          if (farmInfo.includes('Farm Type: garden')) {
            cy.get('#map > div > canvas').scrollIntoView();
            cy.wait(5000); // Wait for 5 seconds
            // Click on an element (b) and wait for its action
            cy.get('#weatherBtn').click();
            cy.wait(5000); // Wait for 5 seconds
            // Scroll to an element (element) and wait for it to scroll into view
            cy.get('#weather-stats').scrollIntoView();
            cy.wait(5000); // Wait for 5 seconds
            // Click on an element (c) and wait for its action
            cy.get('#cropCalBtn').click();
            cy.wait(7000); // Wait for 7 seconds
            // Scroll to an element (element) and wait for it to scroll into view
            cy.get('#cropCalContent > div').scrollIntoView();
            cy.wait(7000); // Wait for 7 seconds
            // Click on elements (c, c) and wait for their actions
            cy.get('#popup-button').click();
            cy.wait(5000); // Wait for 5 seconds
            cy.get('#popup-overlay > div > button').click();
            cy.wait(7000); // Wait for 7 seconds
            // Click on an element (d) and wait for its action
            cy.get('#pestDiseaseBtn').click();
            cy.wait(7000); // Wait for 7 seconds
            // Scroll to an element (element) and wait for it to scroll into view
            cy.get('#pest_ima').scrollIntoView();
            cy.wait(5000); // Wait for 5 seconds   
          } 
          if (!farmInfo.includes('Farm Type:')) {
            cy.log('Unknown Farm Type');
          }
        });
    });
  });
});


