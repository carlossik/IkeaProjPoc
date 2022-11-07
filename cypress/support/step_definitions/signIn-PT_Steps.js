/// <reference types="cypress"/>
import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../pageobjects/home_page';
import signInPage from '../pageobjects/signIn_page';


Given(/^open the ([^"]*) page$/, (page) => {
  
  //cy.visit('/');
  cy.visit('/', {
    headers: {
        'accept': 'application/json, text/plain, */*',
        'user-agent': 'axios/0.27.2'
    }
});
  cy.window().then((win) => {
    win.eval('Object.defineProperty(navigator, \'webdriver\', {get: () => undefined})');
   })
  
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
  cy.get('#rewardsGrid').should('be.visible') 
});

