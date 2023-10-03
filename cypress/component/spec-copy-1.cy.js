// Login.spec.js

import React from 'react';
import { mount } from '@cypress/react';
import LoginForm from './LoginForm'; // Import your login form component

describe('Login Component Test', () => {
  beforeEach(() => {
    // Mount the login form component
    mount(<LoginForm />);
  });

  it('should fill in and submit the login form', () => {
    // Set the viewport size (if needed)
    // cy.viewport('macbook-15');

    // Find and fill in the username and password fields
    cy.get('input[type="text"]').type('6383850118');
    cy.get('input[type="password"]').type('sneha@0118');

    // Submit the login form
    cy.get('input[id="submit"]').should('be.visible').click();

    // Assert login success (replace with appropriate assertions)
    cy.url().should('eq', 'https://sat2farm.com/user.php');
    cy.log('Login Successful');
  });
});
