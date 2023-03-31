/* eslint-disable chai-friendly/no-unused-expressions */
/* eslint-disable no-unused-vars */
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = require("../../pages/HomePage").default;



Then("my reward keys should be displayed", function () {
  cy.get("#rewardsGrid").should("be.visible");
});
Then("the number of rewards displayed are {string}", function (reward) {
  cy.get('*[id^="rewards-reward-"]').should('have.length',reward);
})
Then("total Keys are displayed", function () {
  
  homePage.RewardTotaldisPlayed();
});
Then("History button is displayed", function () {
  
  homePage.RewarHistoryButtonsdisplayed();
});
Then("How to collect reward keys is displayed", function () {
 
  homePage.HowToCollectKeysdisplayed();

});
Then("Frequently asked questions are displayed", function () {
  
  homePage.Faqsdisplayed();
  
});
