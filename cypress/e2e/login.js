import { Given, When, Then } from "cypress-cucumber-preprocessor";

Given('I am on the homepage', () => {
    cy.visit('https://qauto.forstudy.space/');
})

When('I fill in the login form with {string} and {string}', (email, password) => {
    if (email) cy.get('#username').type(email);
    if (password) cy.get('#password').type(password);
})

When('I click the Login button', () => {
    cy.get('[type="submit"]').click();
})

Then('I should {string}', (login_status) => {
    if (login_status === 'be logged in') {
        cy.get('.hero-descriptor_title').should('have.text', 'Do more!');
    } else if (login_status === 'see an error message') {
        cy.get('h1').should('have.text', '401 Authorization Required');
    }
})
