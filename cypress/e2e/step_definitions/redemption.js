/* eslint-disable cypress/no-assigning-return-values */
/* eslint-disable no-unused-vars */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/HomePage';

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
    //cy.get('[data-testid="reward-5064"] > .rewards__rewards__inner')
    //.click({force:true});
  });

  When("I click on redemption button", function () {
    cy.get('.reward__reward-bar__btn-wrap > .reward__btn > .reward__btn__inner')
    .click({force:true});
  });
  Then("Confirmation screen is displayed", function () {
    cy.get('.reward__prompt__content')
    .should('be.visible');

  });
  Given("I have redeemed a reward", function () {
    //if
    const redeemed = cy.findAllByText("Use reward")
    if(redeemed)
    {cy.log("There is a redeemed reward here")}//redeemed.eq(1).click({force:true})}
    else this.skip()
  });
  When("I click on use reward button", function () {
    cy.findAllByText("Use reward").eq(1).click({force:true});
  });
  Then("I should be taken to the redemption page", function () {
    cy.url().should('contain', '/loyalty-hub/rewards/');
  });
  Then("I should see the Valid until date",function(){
    cy.get('.reward__status__label').should('be.visible')
  })
  When("I click on the view qr code button",function(){
    cy.get('.reward__reward-bar__btn-wrap > .reward__btn > .reward__btn__inner')
    .click({force:true})
  })
  Then("I should see QR code displayed", function(){
    cy.get('.reward__redeemReward-rewardcard > .reward__member-card > .reward__member-card__section > .reward__member-card__code-graphic > img')
    .should('be.visible')
  })
  Then("family card is displayed",function(){
    cy.get('.reward__redeemReward-familycard')
    .should('be.visible')

  })
  Then("Name is displayed on family card",function(){
    cy.get('.reward__redeemReward-familycard > .reward__member-card > .reward__member-card__header > .reward__member-card__name')
    .should('be.visible')
  })
  