Feature: Login page

    I want to be able to use the login page

    Scenario: Login with valid credentials
        Given I open the Swag Labs website
        When I submit valid credentials into the login form
        Then I am logged into the website

    Scenario: Attempt to login with invalid credentials
        Given I open the Swag Labs website
        When I submit invalid credentials into the login form
        Then I am not logged into the website
        And I am shown an error to say my credentials are incorrect

    Scenario: Attempt to login with locked out user
        Given I open the Swag Labs website
        When I submit valid credentials for a locked out user into the login form
        Then I am not logged into the website
        And I am shown an error to say the user is locked out