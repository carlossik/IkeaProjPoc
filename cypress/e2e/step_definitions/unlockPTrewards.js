/* eslint-disable no-unused-vars */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const homePage = require('../../pages/HomePage').default;
const RewardsPage = require('../../pages/RewardsPage').default;
//const logUser = require('../loginScript').default;

Given('A User has successfully Logged into the rewards page', function (string) {
  cy.loginPT();
});
When('Cake and Coffee for one is selected', function (string) {
  cy.loginPT();
  cy.get('#rewards-reward-4989 > .rewards__rewards__inner').click({force:true})
  
});
Then('Cake and Coffee amount displayed is {string} ', function () {
  cy.get('.reward__reward-bar__amount').find('span').should('have.text','30')
  
});
