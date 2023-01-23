/* eslint-disable no-unused-vars */
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = require("../../pages/HomePage").default;
const logUser = require("../loginScript").default;


Given("A user is already Logged into rewards page",function(){
    logUser.login()

});
Then("They can see available keys",function(){
    cy.get('#rewards-total-balance > span').should('be.visible')
});
Then("They can see the History button",function(){
    cy.get('#openHistory > :nth-child(1)').should('be.visible')
});
Given("User Clicks on the history button",function(){
    cy.get('.rewards__keys__balance-history-button__label').click({force:true})
});
Then("Keys balance history  is displayed",function(){
    cy.get('.rewards__sheets__content-wrapper').should('be.visible')
});
Then("Total keys matches total displayed",function(){

})


