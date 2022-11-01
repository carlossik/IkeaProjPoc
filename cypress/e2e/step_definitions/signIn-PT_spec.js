import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../support/pageobjects/home_page';
import signInPage from '../../support/pageobjects/signIn_page';

Given(/^open the ([^"]*) page$/, (page) => {
  cy.visit('/');
  cy.setCookie('session_id', 'dCAErBXgdMRDGFWo')
  cy.visit('https://www.ikea.com/pt/en/loyalty-hub/')
  
});

When(/^enter my username$/, () => {
  signInPage.typeEmailAddress();
});
When(/^enter my password$/, () => {
  signInPage.typePassWord();
});
When(/^click on continue button$/, () => {
  signInPage.clickContinueButton();

  
});

Then(/^User should be logged into account$/, (message) => {
  
});

