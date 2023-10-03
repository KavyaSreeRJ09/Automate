Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent Cypress from failing the test
  return false;
});
describe('Farm Automation', () => {
  before(() => {
    // Visit the website
    cy.visit('https://sat2farm.com/');
    cy.viewport('macbook-15'); // Adjust the viewport as needed

    // Locate and fill in the login form
    cy.get('input[type="text"]').type('6383850118');
    cy.get('input[type="password"]').type('sneha@0118');
    cy.get('input#submit').click();

    // Wait for the login to complete (you can adjust the wait duration)
    cy.url().should('eq', 'https://sat2farm.com/user.php');
  });
  it('Get farm details', () => {
    // Click on the specific farm item (you might need to adjust the selector)
    cy.get('#Farmlist > div:nth-child(1)').click();

    // Wait for the page to load (you can adjust the wait duration)
    cy.wait(7000);

    // Gather and log farm data
    cy.get('#farmID').then(($fid) => {
      const farmID = $fid.text();
      cy.log(`Farm ID = ${farmID}`);
    });

    cy.get('#farmName').then(($fname) => {
      const farmName = $fname.text();
      cy.log(`Farm Name = ${farmName}`);
    });

    cy.get('#cropType').then(($cname) => {
      const cropName = $cname.text();
      cy.log(`Crop Name = ${cropName}`);
    });

    cy.get('#cropStage').then(($cage) => {
      const cropAge = $cage.text();
      cy.log(`Crop Age = ${cropAge}`);
    });

    cy.get('#latitude').then(($clat) => {
      const latitude = $clat.text();
      cy.log(`Latitude = ${latitude}`);
    });

    cy.get('#longitude').then(($clong) => {
      const longitude = $clong.text();
      cy.log(`Longitude = ${longitude}`);
    });

    cy.get('#Area').then(($carea) => {
      const area = $carea.text();
      cy.log(`Area = ${area}`);
    });
  });
});
describe('Farm Automation', () => {
  before(() => {
    // Visit the website
    cy.visit('https://sat2farm.com/');
    cy.viewport('macbook-15'); // Adjust the viewport as needed

    // Locate and fill in the login form
    cy.get('input[type="text"]').type('6383850118');
    cy.get('input[type="password"]').type('sneha@0118');
    cy.get('input#submit').click();

    // Wait for the login to complete (you can adjust the wait duration)
    cy.url().should('eq', 'https://sat2farm.com/user.php');
  });
  it('Get farm details', () => {
    // Click on the specific farm item (you might need to adjust the selector)
    cy.get('#Farmlist > div:nth-child(3)').click();

    // Wait for the page to load (you can adjust the wait duration)
    cy.wait(7000);

    // Gather and log farm data
    cy.get('#farmID').then(($fid) => {
      const farmID = $fid.text();
      cy.log(`Farm ID = ${farmID}`);
    });

    cy.get('#farmName').then(($fname) => {
      const farmName = $fname.text();
      cy.log(`Farm Name = ${farmName}`);
    });

    cy.get('#cropType').then(($cname) => {
      const cropName = $cname.text();
      cy.log(`Crop Name = ${cropName}`);
    });

    cy.get('#cropStage').then(($cage) => {
      const cropAge = $cage.text();
      cy.log(`Crop Age = ${cropAge}`);
    });

    cy.get('#latitude').then(($clat) => {
      const latitude = $clat.text();
      cy.log(`Latitude = ${latitude}`);
    });

    cy.get('#longitude').then(($clong) => {
      const longitude = $clong.text();
      cy.log(`Longitude = ${longitude}`);
    });

    cy.get('#Area').then(($carea) => {
      const area = $carea.text();
      cy.log(`Area = ${area}`);
    });
  });
});