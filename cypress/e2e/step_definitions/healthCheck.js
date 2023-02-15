/* eslint-disable no-unused-vars */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/HomePage';

const homePage = require('../../pages/HomePage').default;

Given("A user is already Logged in a region", function () {
    cy.loginIT();
  });
  
  Then("They can see member card displayed", function () {
    HomePage.CustomerMemberCardDisplayed();
  });
  Then("They can see Their rewards displayed", function () {
HomePage.VerifyRewardsGrid();
  });