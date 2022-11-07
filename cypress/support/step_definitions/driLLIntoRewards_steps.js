/// <reference types="cypress"/>

import {When,Then,Before,After} from "@badeball/cypress-cucumber-preprocessor"


import homePage from '../pageobjects/home_page';
import signInPage from '../pageobjects/signIn_page';


Given(/^I am on the ([^"]*) page$/, (page) => {
    return "pending";
  });
  When(' And rewards grid is enabled',() => {
    cy.get('#rewardsgrid').should('be.visible') 
  });
  When(' I click on any  Reward {word}',(reward) => {
    cy.click(reward)
  });
  Then('the <Reward_Availability> button will be displayed',() => {
    cy.get('#').should('be.visible')
  });
  Then('<Number Of Keys>  for the reward is displayed',() => {
    cy.get('#').should('be.visible')
  });
  Then('<Terms_of_use> of use is displayed',() => {
    cy.get('#').should('be.visible')
  });
