/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// eslint-disable-next-line no-unused-vars
const homePage = require("../../pages/HomePage").default;

When("I select {string}", function (reward) {

    cy.get('[data-testid="reward-4914"] > .rewards__rewards__inner')

  });