/* eslint-disable chai-friendly/no-unused-expressions */
/* eslint-disable no-unused-vars */
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = require("../../pages/HomePage").default;

Given("A User is already Logged into rewards page", function () {
  cy.loginPT();
  cy.get('#loyalty-hub__qr-code').should('be.visible')
});
Then("my reward keys should be displayed", function () {
  cy.get("#rewardsGrid").should("be.visible");
});
Then("the number of rewards displayed are 10", function () {
  cy.loginPT();
  cy.get('*[id^="rewards-reward-"]').should('have.length',10);
})
Then("total Keys are displayed", function () {
  cy.loginPT();
  homePage.RewardTotaldisPlayed();
});
Then("History button is displayed", function () {
  cy.loginPT();
  homePage.RewarHistoryButtonsdisplayed();
});
Then("How to collect reward keys is displayed", function () {
  cy.loginPT();
  homePage.HowToCollectKeysdisplayed();

});
Then("Frequently asked questions are displayed", function () {
  cy.loginPT();
  homePage.Faqsdisplayed();
  
});
