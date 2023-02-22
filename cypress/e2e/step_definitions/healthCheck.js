/* eslint-disable no-unreachable */
/* eslint-disable chai-friendly/no-unused-expressions */
/* eslint-disable no-unused-vars */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/HomePage';

const homePage = require('../../pages/HomePage').default;


  Then("I should see my member details", function () {

    HomePage.CustomerMemberCardDisplayed();})
  
  Then('I see my rewards displayed', () => {
    HomePage.VerifyRewardsGrid();
  });
  Then('I should see my keys displayed', () => {
    HomePage.GetTotalKeys();
    
  });
  
  Then('my history should be displayed', () => {
    HomePage.RewarHistoryButtonsdisplayed();
    HomePage.clickOpenHistoryButton();
    HomePage.GetTotalKeysOnHistoryTab();
  });
  