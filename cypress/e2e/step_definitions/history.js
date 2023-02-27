/* eslint-disable no-unused-vars */
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";

const homePage = require("../../pages/HomePage").default;




Then("They can see available keys",function(){
    HomePage.RewardTotaldisPlayed()
});
Then("They can see the History button",function(){
    
    HomePage.RewarHistoryButtonsdisplayed();
});
When("User Clicks on the history button",function(){
    
    HomePage.clickOpenHistoryButton();

});
Then("Keys balance history  is displayed",function(){
    
    HomePage.GetKeyBalanceHistory()
    HomePage.GetTotalKeys()
});
Then("Total keys matches total displayed",function(){
    HomePage.GetTotalKeysOnHistoryTab()

})


