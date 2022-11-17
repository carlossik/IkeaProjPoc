/// <reference types="cypress"/>

//import { When, Then, Before, After } from '@badeball/cypress-cucumber-preprocessor';
import { Given, When, Then, Before,After } from '@badeball/cypress-cucumber-preprocessor' ;
import homePage from '../../support/pageobjects/home_page';
import signInPage from '../../support/pageobjects/signIn_page';
// //before(() => {
//   cy.task('getAccessToken', {
//     ...familyUser
//   }).then(token => {
//     cy.setCookie('idp_reguser', token);
//   });
// });

// beforeEach(() => {
//   cy.keepLoggedInCookie();
// });


Given('I am already logged into my acount', () => {
  cy.visit('/');
});
When(' And rewards grid is enabled', () => {
  cy.get('#rewardsgrid').should('be.visible');
});
When(' I click on any  Reward {word}', (reward) => {
  cy.click(reward);
});
Then('the Reward_Availability button will be displayed', () => {
  cy.get('#').should('be.visible');
});
Then('Number Of Keys  for the reward is displayed', () => {
  cy.get('#').should('be.visible');
});
Then('Terms_of_use of use is displayed', () => {
  cy.get('#').should('be.visible');
});
