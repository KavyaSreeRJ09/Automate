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
    cy.get('input[type="text"]').type('6383850118');
    cy.get('input[type="password"]').type('sneha@0118');

    // Click the login button
    cy.get('#submit').click();

    // Wait for the login to complete (adjust the timeout as needed)
    cy.wait(7000);

    // Verify the login result by checking the URL
    cy.url().should('eq', 'https://sat2farm.com/user.php');
    
    // Find and click on a specific element (you might need to adjust the XPath)
    cy.get('#Farmlist > div:nth-child(1)').click()
    cy.wait(5000);

    // Scroll to the map element
    cy.get('#map > div > canvas').scrollIntoView();
    cy.wait(5000);

    // Click the Crop Calendar button
    cy.get('#cropCalBtn').click();
    cy.wait(7000);

    // Extract and print Crop Name
    cy.get('#Crop_type').invoke('text').then((cropName) => {
      cy.log('Crop Name: ' + cropName);
    });

    // Extract and print Crop Age
    cy.get('#Crop_age1').invoke('text').then((cropAge) => {
      cy.log('Crop Age: ' + cropAge);
    });

    // Extract and print Crop
    cy.get('#hide > p > span').invoke('text').then((crop) => {
      cy.log('Crop: (' + crop + ')');
    });

    // Extract and print Day
    cy.get('#rangeStart').invoke('text').then((rangeStart) => {
      cy.get('#rangeEnd').invoke('text').then((rangeEnd) => {
        cy.get('#cropStage').invoke('text').then((cropStage) => {
          const day = parseInt(cropStage);
          const start = parseInt(rangeStart);
          const end = parseInt(rangeEnd);

          if (day >= start && day <= end) {
            cy.log(day + ' is the Day');
            cy.log('Test Case Passed');
          } else {
            cy.log('Test Case Failed');
          }
        });
      });
    });

    // Scroll to the Crop Calendar content
    cy.get('#cropCalContent > div').scrollIntoView();
    cy.wait(5000);

    // Click the "popup-button" element
    cy.get('#popup-button').click();
    cy.wait(5000);

    // Extract and print "Before Transplantation" text
    cy.get('#popup-text').invoke('text').then((popupText) => {
      cy.log('Before Transplantation:');
      cy.log(popupText);
    });

    // Close the popup
    cy.get('#popup-overlay > div > button').click();
    cy.wait(7000);
  });
});
describe('Your Test Suite Name', () => {
  it('Should perform actions on the website', () => {
    // Visit the website
    cy.visit('https://sat2farm.com/');

    // Maximize the window (Cypress does not support this natively, use viewport)
    cy.viewport(1920, 1080);

    // Locate and fill in the login form
    cy.get('input[type="text"]').type('6383850118');
    cy.get('input[type="password"]').type('sneha@0118');

    // Click the login button
    cy.get('#submit').click();

    // Wait for the login to complete (adjust the timeout as needed)
    cy.wait(7000);

    // Verify the login result by checking the URL
    cy.url().should('eq', 'https://sat2farm.com/user.php');
    
    // Find and click on a specific element (you might need to adjust the XPath)
    cy.get('#Farmlist > div:nth-child(3)').click()
    cy.wait(5000);

    // Scroll to the map element
    cy.get('#map > div > canvas').scrollIntoView();
    cy.wait(5000);

    // Click the Crop Calendar button
    cy.get('#cropCalBtn').click();
    cy.wait(7000);

    // Extract and print Crop Name
    cy.get('#Crop_type').invoke('text').then((cropName) => {
      cy.log('Crop Name: ' + cropName);
    });

    // Extract and print Crop Age
    cy.get('#Crop_age1').invoke('text').then((cropAge) => {
      cy.log('Crop Age: ' + cropAge);
    });

    // Extract and print Crop
    cy.get('#hide > p > span').invoke('text').then((crop) => {
      cy.log('Crop: (' + crop + ')');
    });

    // Extract and print Day
    cy.get('#rangeStart').invoke('text').then((rangeStart) => {
      cy.get('#rangeEnd').invoke('text').then((rangeEnd) => {
        cy.get('#cropStage').invoke('text').then((cropStage) => {
          const day = parseInt(cropStage);
          const start = parseInt(rangeStart);
          const end = parseInt(rangeEnd);

          if (day >= start && day <= end) {
            cy.log(day + ' is the Day');
            cy.log('Test Case Passed');
          } else {
            cy.log('Test Case Failed');
          }
        });
      });
    });

    // Scroll to the Crop Calendar content
    cy.get('#cropCalContent > div').scrollIntoView();
    cy.wait(5000);

    // Click the "popup-button" element
    cy.get('#popup-button').click();
    cy.wait(5000);

    // Extract and print "Before Transplantation" text
    cy.get('#popup-text').invoke('text').then((popupText) => {
      cy.log('Before Transplantation:');
      cy.log(popupText);
    });

    // Close the popup
    cy.get('#popup-overlay > div > button').click();
    cy.wait(7000);
  });
});
describe('Your Test Suite Name', () => {
  it('Should perform actions on the website', () => {
    // Visit the website
    cy.visit('https://sat2farm.com/');

    // Maximize the window (Cypress does not support this natively, use viewport)
    cy.viewport(1920, 1080);

    // Locate and fill in the login form
    cy.get('input[type="text"]').type('6383850118');
    cy.get('input[type="password"]').type('sneha@0118');

    // Click the login button
    cy.get('#submit').click();

    // Wait for the login to complete (adjust the timeout as needed)
    cy.wait(7000);

    // Verify the login result by checking the URL
    cy.url().should('eq', 'https://sat2farm.com/user.php');
    
    // Find and click on a specific element (you might need to adjust the XPath)
    cy.get('#Farmlist > div:nth-child(4)').click()
    cy.wait(5000);

    // Scroll to the map element
    cy.get('#map > div > canvas').scrollIntoView();
    cy.wait(5000);

    // Click the Crop Calendar button
    cy.get('#cropCalBtn').click();
    cy.wait(7000);

    // Extract and print Crop Name
    cy.get('#Crop_type').invoke('text').then((cropName) => {
      cy.log('Crop Name: ' + cropName);
    });

    // Extract and print Crop Age
    cy.get('#Crop_age1').invoke('text').then((cropAge) => {
      cy.log('Crop Age: ' + cropAge);
    });

    // Extract and print Crop
    cy.get('#hide > p > span').invoke('text').then((crop) => {
      cy.log('Crop: (' + crop + ')');
    });

    // Extract and print Day
    cy.get('#rangeStart').invoke('text').then((rangeStart) => {
      cy.get('#rangeEnd').invoke('text').then((rangeEnd) => {
        cy.get('#cropStage').invoke('text').then((cropStage) => {
          const day = parseInt(cropStage);
          const start = parseInt(rangeStart);
          const end = parseInt(rangeEnd);

          if (day >= start && day <= end) {
            cy.log(day + ' is the Day');
            cy.log('Test Case Passed');
          } else {
            cy.log('Test Case Failed');
          }
        });
      });
    });

    // Scroll to the Crop Calendar content
    cy.get('#cropCalContent > div').scrollIntoView();
    cy.wait(5000);

    // Click the "popup-button" element
    cy.get('#popup-button').click();
    cy.wait(5000);

    // Extract and print "Before Transplantation" text
    cy.get('#popup-text').invoke('text').then((popupText) => {
      cy.log('Before Transplantation:');
      cy.log(popupText);
    });

    // Close the popup
    cy.get('#popup-overlay > div > button').click();
    cy.wait(7000);
  });
});
describe('Your Test Suite Name', () => {
  it('Should perform actions on the website', () => {
    // Visit the website
    cy.visit('https://sat2farm.com/');

    // Maximize the window (Cypress does not support this natively, use viewport)
    cy.viewport(1920, 1080);

    // Locate and fill in the login form
    cy.get('input[type="text"]').type('6383850118');
    cy.get('input[type="password"]').type('sneha@0118');

    // Click the login button
    cy.get('#submit').click();

    // Wait for the login to complete (adjust the timeout as needed)
    cy.wait(7000);

    // Verify the login result by checking the URL
    cy.url().should('eq', 'https://sat2farm.com/user.php');
    
    // Find and click on a specific element (you might need to adjust the XPath)
    cy.get('#Farmlist > div:nth-child(1)').click()
    cy.wait(5000);

    // Scroll to the map element
    cy.get('#map > div > canvas').scrollIntoView();
    cy.wait(5000);

    // Click the Crop Calendar button
    cy.get('#cropCalBtn').click();
    cy.wait(7000);

    // Extract and print Crop Name
    cy.get('#Crop_type').invoke('text').then((cropName) => {
      cy.log('Crop Name: ' + cropName);
    });

    // Extract and print Crop Age
    cy.get('#Crop_age1').invoke('text').then((cropAge) => {
      cy.log('Crop Age: ' + cropAge);
    });

    // Extract and print Crop
    cy.get('#hide > p > span').invoke('text').then((crop) => {
      cy.log('Crop: (' + crop + ')');
    });

    // Extract and print Day
    cy.get('#rangeStart').invoke('text').then((rangeStart) => {
      cy.get('#rangeEnd').invoke('text').then((rangeEnd) => {
        cy.get('#cropStage').invoke('text').then((cropStage) => {
          const day = parseInt(cropStage);
          const start = parseInt(rangeStart);
          const end = parseInt(rangeEnd);

          if (day >= start && day <= end) {
            cy.log(day + ' is the Day');
            cy.log('Test Case Passed');
          } else {
            cy.log('Test Case Failed');
          }
        });
      });
    });

    // Scroll to the Crop Calendar content
    cy.get('#cropCalContent > div').scrollIntoView();
    cy.wait(5000);

    // Click the "popup-button" element
    cy.get('#popup-button').click();
    cy.wait(5000);

    // Extract and print "Before Transplantation" text
    cy.get('#popup-text').invoke('text').then((popupText) => {
      cy.log('Before Transplantation:');
      cy.log(popupText);
    });

    // Close the popup
    cy.get('#popup-overlay > div > button').click();
    cy.wait(7000);
  });
});
