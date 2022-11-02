import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import homePage from '../../support/pageobjects/home_page';
import signInPage from '../../support/pageobjects/signIn_page';


Given(/^open the ([^"]*) page$/, (page) => {
  
  cy.visit('/');
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

