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
 
  


  //cy.get('*[class^="#rewards-reward-"]').should('have.length',10);

Then("total Keys are displayed", function () {
  cy.loginPT();
  homePage.RewardTotaldisPlayed();
});
Then("History button is displayed", function () {
  cy.loginPT();
  homePage.RewarHistoryButtonsdisplayed();
});
Then("my projects will be displayed", function () {
  cy.loginPT();
  //homePage.verifyProjects();
  //cy.get('*[id^="data-testid="card-entrypoints"]').should('have.length',4);
  //cy.get('*[data-testid^="card-entrypoints"]' ).should('have.length',4)
  //cy.get('[data-testid="card-entrypoints"] > :nth-child(1) > :nth-child(1) > .card > .card__info')
});
Then("Total number of projects displayed is 4", function () {
  cy.loginPT();
  cy.get('*[data-test-id^="card-entrypoints"]' ).should('have.attr', '.card__info').should('have.length',4)
  //cy.get('[data-test-id^="table-element-"][data-test-id$=".card__info"])
  //cy.get('*[data-cy^="introCard"]')
});
Then("How to collect reward keys is displayed", function () {
  cy.loginPT();
  homePage.HowToCollectKeysdisplayed();

});
Then("Frequently asked questions are displayed", function () {
  cy.loginPT();
  homePage.Faqsdisplayed();
  
});
