# cypress-bdd-shopping-example

This is a repo to demonstrate the use of [Cypress.io](https://www.cypress.io) using the [Cypress preprocessor plugin](https://www.npmjs.com/package/cypress-cucumber-preprocessor)
for having the tests in a BDD format. This runs against the website https://www.saucedemo.com/ by SwagLabs.

The tests will run in [GitHub Actions](https://github.com/scott-macleod-tech/cypress-bdd-shopping-example/actions) on the creation of pull requests and subsequent updates to the pull request as well as when code is merged to the `main` branch.

## How to run locally
1. Get the password from https://www.saucedemo.com/ and run `export CYPRESS_user_password=<insert passowrd here>` 
1. `npm install`
1. `npx cypress run`
