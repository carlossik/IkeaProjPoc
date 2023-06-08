/* eslint-disable no-unused-vars */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/HomePage';

const homePage = require('../../pages/HomePage').default;


Given("I can see how to collect {string} for market", function (string) {
  cy.get('.earning-activities__activity--featured')
  .should('be.visible')
  cy.get('.earning-activities__activity__inner').should('have.length',string)
});

Then('They can see how to collect rewards', function () {
    cy.get('.earning-activities__activity--featured')
    .should('be.visible')
});


Then("I can see how to collect rewards slider", function () {
  cy.get('.earning-activities__slider-touch-area')
  .should('be.visible');
    });
When('I slide the slider button', function () {
  
  HomePage.SlideUp(12)

});
  
Then('available keys {string} are displayed', function (string) {
  cy.get('.earning-activities__slider')
  .should('have.text',string)
 
});
Then('available amount {string} is displayed', function (string) {
  //cy.get('[data-testid="/^activity-amount-value-(au|pt|it)-(interaction|spend)-/d{2}$/"]') 
  cy.get('[data-testid^="activity-amount-value-"]').should('include.text',string)
});

