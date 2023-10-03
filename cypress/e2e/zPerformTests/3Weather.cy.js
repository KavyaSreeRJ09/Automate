Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent Cypress from failing the test
  return false;
});
describe('Login and Weather Data Test', () => {
  it('Should login and fetch weather data', () => {
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
    
    // Scroll into view
    cy.get('#map > div > canvas').scrollIntoView()
    
    // Click the weather button
    cy.get('#weatherBtn').click()
    
    // Scroll into view
    cy.get('#Weather > div:nth-child(2) > div:nth-child(1)').scrollIntoView()
    
    // Scroll into view
    cy.get('#weather-stats').scrollIntoView()

    // Get Minimum Temperature
    cy.get('#Mintemperature').invoke('text').then((text) => {
      cy.log('Minimum Temperature: ', text)
    })
    
    // Get Maximum Temperature
    cy.get('#Maxtemperature').invoke('text').then((text) => {
      cy.log('Maximum Temperature: ', text)
    })
    
    // Get Weather Report
    cy.get('#narrative').invoke('text').then((text) => {
      cy.log('Weather Report: ', text)
    })
    
    // Get Weather Details
    cy.get('#weather-details').invoke('text').then((text) => {
      cy.log(text)
    })
    
    // Get Weather Grid
    cy.get('#weather_grid').invoke('text').then((text) => {
      cy.log('Day, Minimum Temperature, Maximum Temperature')
      cy.log(text)
    })
  })
})

describe('Login and Weather Data Test', () => {
  it('Should login and fetch weather data', () => {
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
    
    // Scroll into view
    cy.get('#map > div > canvas').scrollIntoView()
    
    // Click the weather button
    cy.get('#weatherBtn').click()
    
    // Scroll into view
    cy.get('#Weather > div:nth-child(2) > div:nth-child(1)').scrollIntoView()
    
    // Scroll into view
    cy.get('#weather-stats').scrollIntoView()

    // Get Minimum Temperature
    cy.get('#Mintemperature').invoke('text').then((text) => {
      cy.log('Minimum Temperature: ', text)
    })
    
    // Get Maximum Temperature
    cy.get('#Maxtemperature').invoke('text').then((text) => {
      cy.log('Maximum Temperature: ', text)
    })
    
    // Get Weather Report
    cy.get('#narrative').invoke('text').then((text) => {
      cy.log('Weather Report: ', text)
    })
    
    // Get Weather Details
    cy.get('#weather-details').invoke('text').then((text) => {
      cy.log(text)
    })
    
    // Get Weather Grid
    cy.get('#weather_grid').invoke('text').then((text) => {
      cy.log('Day, Minimum Temperature, Maximum Temperature')
      cy.log(text)
    })
  })
})
