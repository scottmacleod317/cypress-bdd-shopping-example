import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.saucedemo.com/";

const password = Cypress.env('user_password')

Given('I open the Swag Labs website', () => {
  cy.visit(url);
});


When('I submit valid credentials into the login form', () => {
    cy.get('#user-name').click().type('standard_user')
    cy.get('#password').click().type(password)
    cy.get('#login-button').click()
})


Then('I am logged into the website', () => {
  cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  cy.get('#shopping_cart_container')
})


When('I submit invalid credentials into the login form', () => {
  cy.get('#user-name').click().type('this_user_doesnt_exist')
  cy.get('#password').click().type('super_password')
  cy.get('#login-button').click()
})


Then('I am not logged into the website', () => {
  cy.url().should('eq', 'https://www.saucedemo.com/')
  cy.get('#shopping_cart_container').should('not.exist')
})

Then('I am shown an error to say my credentials are incorrect', () => {
  cy.get('.error-message-container')
})

When('I submit valid credentials for a locked out user into the login form', () => {
  cy.get('#user-name').click().type('locked_out_user')
  cy.get('#password').click().type(password)
  cy.get('#login-button').click()
})

Then('I am shown an error to say the user is locked out', () => {
  cy.get('.error-message-container')
})
