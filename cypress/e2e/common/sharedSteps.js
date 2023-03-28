/* eslint-disable no-unused-vars */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/HomePage';


Given("I login to a market with {string}", function (string) {
    if (string  == "PT") {
        cy.loginPT();
      } else if (string  == "IT") {
        cy.loginIT();
      } else if (string == "AU"){
        cy.loginAU();
      }  
      else cy.loginPT();
  });