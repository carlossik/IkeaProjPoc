/* eslint-disable no-unused-vars */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/HomePage';
import RewardsPage from '../../pages/RewardsPage';


Given("I login to a market with {string}", function (string) {
    if (string.toLowerCase()  == "pt") {
        cy.loginPT();
      } else if (string.toLowerCase()  == "it") {
        cy.loginIT();
      } else if (string.toLowerCase() == "au"){
        cy.loginAU();
      }  
      else cy.loginPT();
  });
  


Given("I login1 to a market with {string}", function (string) {
  
  cy.OneLogin(string.toLowerCase())
}) 

