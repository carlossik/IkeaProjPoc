/* eslint-disable no-unused-vars */
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";

const homePage = require("../../pages/HomePage").default;


Given("A user is already Logged into rewards page",function(){
    cy.loginPT();
});
When("They can see available keys",function(){
    HomePage.RewardTotaldisPlayed()
});
Then("They can see the History button",function(){
    cy.loginPT();
    HomePage.RewarHistoryButtonsdisplayed();
});
When("User Clicks on the history button",function(){
    cy.loginPT();
    HomePage.clickOpenHistoryButton();

});
Then("Keys balance history  is displayed",function(){
    
    HomePage.GetKeyBalanceHistory()
    HomePage.GetTotalKeys()
});
Then("Total keys matches total displayed",function(){
    //cy.get('#rewards--history-total').should('be.visible')
    HomePage.GetTotalKeysOnHistoryTab()

})


