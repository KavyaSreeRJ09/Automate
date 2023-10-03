Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent Cypress from failing the test
  return false;
});
// Assuming you've set up Cypress and have your Cypress tests in place

// Define a custom Cypress command to perform farm actions
Cypress.Commands.add('performFarmActions', (farmInfo) => {
  cy.get('.farm-element-class', { timeout: 10000 }).should('be.visible')
    .eq(0) // Use eq(index) to select a specific farm if needed
    .click()
    .wait(7000); // Use wait to wait for specific durations

  // Scroll to the map element
  cy.get('#map > div > canvas').scrollIntoView().wait(5000);

  if (farmInfo === 'Farm Type: Farm') {
    // Weather
    cy.get('#weatherBtn')
      .scrollIntoView()
      .click()
      .wait(5000);
    
    cy.get('#weather-stats').scrollIntoView().wait(5000);

    // Crop Calendar
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
  } else if (farmInfo === 'Farm Type: Polyhouse') {
    // Polyhouse specific actions here
    // Weather
    cy.get('#weatherBtn')
      .scrollIntoView()
      .click()
      .wait(5000);
    
    cy.get('#weather-stats').scrollIntoView().wait(5000);

  } else if (farmInfo === 'Farm Type: Tank') {
    // Tank specific actions here
    // Weather
    cy.get('#weatherBtn')
      .scrollIntoView()
      .click()
      .wait(5000);
    
    cy.get('#weather-stats').scrollIntoView().wait(5000);

  } else if (farmInfo === 'Farm Type: Garden') {
    // Garden specific actions here
    // Weather
    cy.get('#weatherBtn')
      .scrollIntoView()
      .click()
      .wait(5000);
    
    cy.get('#weather-stats').scrollIntoView().wait(5000);

  } else {
    // Handle unknown farm type
    cy.log('Unknown Farm Type');
  }
});

// Start your test
describe('Farm Actions', () => {
  before(() => {
    // Perform login or any setup if needed
    // cy.login();
  });

  it('Should perform actions on each farm', () => {
    cy.visit('https://sat2farm.com/')
    cy.viewport('macbook-15')
    
    // Locate and fill in the login form
    cy.get('input[type="text"]').type('9843586452')
    cy.get('input[type="password"]').type('kavya@6452')
    
    // Click the login button
    cy.get('#submit').click()
    
    // Verify the login result
    cy.url().should('eq', 'https://sat2farm.com/user.php')

    // Find the list of farms
    cy.get('#Farmlist > div').as('farmlistElements');
    cy.get('@farmlistElements').its('length').as('farmlistCount');
    cy.get('@farmlistCount').then((count) => {
      cy.log(`Total Farmlist items: ${count}`);

      // Loop through each farm and extract information
      for (let farmIndex = 0; farmIndex < count; farmIndex++) {
        cy.log(`Farm ${farmIndex + 1}:`);
        cy.get('@farmlistElements').eq(farmIndex).invoke('text').as('farmInfo');
        cy.get('@farmInfo').then((farmInfo) => {
          cy.log(`Farm Type: ${farmInfo}`);
          cy.performFarmActions(farmInfo);
        });
      }
    });

    // Close the browser when done
    // cy.logout(); // If needed
  });
});
