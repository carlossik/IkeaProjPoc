/* eslint-disable cypress/no-assigning-return-values */
/* eslint-disable no-unused-vars */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/HomePage';
import redemptionPage from '../../pages/redemptionPage';

const homePage = require('../../pages/HomePage').default;

Given("I have enough Keys to redeem a reward", function () {
    if
   (homePage.HasEnoughBalanceForReward(homePage.countryMinimum.AU))
   {
    //pending
   }

  });
  Given("I enter redemption page", function () {
    cy.findAllByText("Unlocked").eq(0).click({force:true});
    
  });

  When("I click on redemption button", function () {
    redemptionPage.enterRedemptionPage()
  });
  Then("Confirmation screen is displayed", function () {
    redemptionPage.isConfirmedScreen()

  });
  Given("I have redeemed a reward", function () {
    
    const redeemed = cy.findAllByText("Use reward")
    if(redeemed)
    {cy.log("There is a redeemed reward here")}
    else this.skip()
  });
  When("I click on use reward button", function () {
    cy.findAllByText("Use reward").eq(1).click({force:true});
  });
  Then("I should be taken to the redemption page", function () {
    cy.url().should('contain', '/loyalty-hub/rewards/');
  });
  Then("I should see the Valid until date",function(){
    
    redemptionPage.expiryDateDisplayedS()
  })
  When("I click on the view qr code button",function(){
    
    redemptionPage.viewQRcodes()
  })
  Then("I should see QR code displayed", function(){
   
    redemptionPage.isQRcodeDisplayed()
  })
  Then("family card is displayed",function(){
    redemptionPage.isFamilyCardDidplayed()
  })
  Then("Name is displayed on family card",function(){
    redemptionPage.isNameDisplayedOnCard()
  })
  