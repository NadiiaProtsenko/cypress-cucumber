import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the homepage', () => {
    cy.visit('https://qauto.forstudy.space/', {
        auth: {
            username: 'guest',
            password: 'welcome2qauto',
        },
    });
});

Then('I should see 5 social media icons', () => {
    cy.get('.socials_icon').should('have.length', 5);
});

When('I click on the Sign Up button', () => {
    cy.get('.hero-descriptor_btn').contains('Sign up').click();
});

Then('I should see the registration form', () => {
    cy.get('.modal-header').contains('Registration').should('be.visible');
});

When('I click on the Sign In button', () => {
    cy.get('.header_signin').click();
});

Then('I should see the login form', () => {
    cy.get('.modal-header').contains('Log in').should('be.visible');
});
