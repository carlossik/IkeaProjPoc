/* eslint-disable no-unused-vars */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const homePage = require('../../pages/HomePage').default;

Given('A user is already Logged in', function () {
  cy.loginPT();
});

Then('They can see how to collect rewards', function () {
    cy.get('.earning-activities__activity--featured')
    .should('be.visible')
});
Then("They can see how to collect rewards slider", function () {
  cy.get('.earning-activities__slider-touch-area').should('be.visible');
    });
Given('User slides the slider button', function () {
  cy.loginPT();
  cy.get('.earning-activities__slider-touch-area').click({ multiple: true, force: true });
  cy.get('.earning-activities__slider-touch-area').type(Cypress._.repeat('{rightarrow}', 12))
});
  
Then('availabe rewards  is displayed', function () {
  cy.get('.earning-activities__slider').should('have.text','€ 520')
  cy.get('.earning-activities__activity--featured > .earning-activities__activity__inner > .earning-activities__activity__info > .earning-activities__activity__amount > strong').should('have.text','135')
});
