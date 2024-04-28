import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the homepage', () => {
    cy.visit('https://qauto.forstudy.space/', {
        auth: {
            username: 'guest',
            password: 'welcome2qauto',
        },
    });
});

When('I fill in the login form with {string} and {string}', (email, password) => {
    cy.get('.header_signin').click();
    if (email) cy.get('#signinEmail').type(email);
    if (password) cy.get('#signinPassword').type(password);
});

When('I click the Login button', () => {
    cy.get('[type="button"].btn-primary').click({force: true});
});

Then('I should be logged in', () => {
    cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
});

Then('I should see an error message', () => {
    cy.get('.alert.alert-danger').then(($alert) => {
        if ($alert.text().includes('Email is invalid')) {
            cy.wrap($alert).should('have.text', 'Email is invalid');
        } else {
            cy.wrap($alert).should('have.text', 'Wrong email or password');
        }
    });
});
