/* eslint-disable chai-friendly/no-unused-expressions */
/* eslint-disable no-unused-vars */
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";

const homePage = require("../../pages/HomePage").default;

Given("A ITUser is already Logged into rewards page", function () {
  cy.loginIT();
  });
Then("my ITreward keys should be displayed", function () {
  cy.loginIT();
    HomePage.VerifyRewardsGrid()
});
Then("the number of ITrewards displayed are 10", function () {
  cy.loginIT();
  homePage.verifyProjects();
});
Then("total ITKeys are displayed", function () {
  cy.loginIT();
  homePage.RewardTotaldisPlayed();
});
Then("ITHistory button is displayed", function () {
  homePage.RewarHistoryButtonsdisplayed();
});
Then("my ITprojects will be displayed", function () {
  cy.loginIT();
  homePage.verifyProjects();
});
Then("Total number of ITprojects displayed is 4", function () {
  cy.loginIT();
  homePage.verifyNumberOfProjects();
});
Then("How to collect reward keysIT is displayed", function () {
  homePage.HowToCollectKeysdisplayed();

});
Then("Frequently asked questionsIT are displayed", function () {
  cy.loginIT();
  homePage.Faqsdisplayed();
});
