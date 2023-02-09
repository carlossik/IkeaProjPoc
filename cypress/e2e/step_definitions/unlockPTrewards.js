/* eslint-disable no-unused-vars */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const homePage = require('../../pages/HomePage').default;
const RewardsPage = require('../../pages/RewardsPage').default;
//const logUser = require('../loginScript').default;

Given('A User has successfully Logged into the rewards page', function (string) {
  cy.loginPT();
});
When('Cake and Coffee for one is selected', function (string) {
  //cy.loginPT();
  cy.get('#rewards-reward-4989 > .rewards__rewards__inner').click({force:true})
  
});
Then('Cake and Coffee amount displayed is "30"', function () {
  cy.get('.reward__reward-bar__amount > h3').should('have.text','30')
  
});
When('Cake and Coffee for two is selected', function (string) {
  cy.get('#rewards-reward-4988 > .rewards__rewards__inner').click({force:true})
});
Then('Cake and Coffee amount displayed is "60"', function () {
  cy.get('.reward__reward-bar__amount > h3').should('have.text','60')
});
When('Complete meal for one is selected', function (string) {
  cy.get('#rewards-reward-4988 > .rewards__rewards__inner').click({force:true})
});
Then('Complete meal for one amount displayed is "150"', function () {
  cy.get('.reward__reward-bar__amount > h3').should('have.text','150')
});