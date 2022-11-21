import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = require("../../pages/HomePage").default;


Given("A User has  Logged into rewards page", function () {
    cy.get('.member-card__number')
    .should('be.visible')})
    Then("Available tokens for user is displayed",function (){
        cy.get('#rewards-total-balance > span')
        .should('be.visible')
    })
When("user clicks on history button",function (){
    // 
    cy.get('.rewards__keys__balance-history-button__label')
    .click({force:true})
})
Then("History page is displayed",function (){
    cy.get('.rewards--history-total')
    .should('be.visible')
})
Then("tokens displayed add up to total tokens",function(){

})
