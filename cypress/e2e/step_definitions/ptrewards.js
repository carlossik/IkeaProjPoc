import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = require("../../pages/HomePage").default;

Given("A User is already Logged into rewards page", function () {
 cy.LoginPT()
 cy.get('.member-card__number')
        .should('be.visible')
});
Then("my reward keys should be displayed", function () {
    homePage.clickAcceptCookie;
  cy.get("#rewardsGrid").should("be.visible");
});
Then("the number of rewards displayed are 10", function () {
  homePage.verifyRewards;
});
Then("total Keys are displayed", function () {
    cy.get('#rewards-total-balance > span').should('be.visible');
});
Then("History button is displayed", function () {
    cy.get('.rewards__keys__balance-history-button__label').should('be.visible');
});
Then("my projects will be displayed", function () {
    cy.get('#card_entry_points_title')
    
    .should('be.visible')
    .as('Get started with your projects');
});
Then("Total number of projects displayed is 4", function () {
  homePage.verifyNumberOfProjects;
});
Then("How to collect reward keys is displayed", function () {
    cy.get('#earning-activities-title').should('be.visible');

});
Then("Frequently asked questions are displayed", function () {
    cy.get('#title > :nth-child(1) > .faq__accordion__heading').should('be.visible');
 
});
