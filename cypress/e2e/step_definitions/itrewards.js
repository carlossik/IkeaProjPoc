import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = require("../../pages/HomePage").default;
const logUser = require("../loginIT").default;

Given("A ITUser is already Logged into rewards page", function () {
  logUser.loginIT();
  homePage.clickAcceptCookie
});
Then("my ITreward keys should be displayed", function () {
    homePage.clickAcceptCookie
  cy.get("#rewardsGrid").should("be.visible");
});
Then("the number of ITrewards displayed are 10", function () {
  homePage.verifyRewards;
});
Then("total ITKeys are displayed", function () {
  homePage.RewardTotaldisPlayed;
});
Then("ITHistory button is displayed", function () {
  homePage.RewarHistoryButtonsdisplayed;
});
Then("my ITprojects will be displayed", function () {
  homePage.verifyProjects;
});
Then("Total number of ITprojects displayed is 4", function () {
  homePage.verifyNumberOfProjects;
});
Then("How to collect reward keysIT is displayed", function () {
  homePage.HowToCollectKeysdisplayed;

});
Then("Frequently asked questionsIT are displayed", function () {
  homePage.Faqsdisplayed;
  
});
