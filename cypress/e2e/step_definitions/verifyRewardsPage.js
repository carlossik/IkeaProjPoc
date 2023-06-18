/* eslint-disable no-unused-vars */
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const homePage = require("../../pages/HomePage").default;
const RewardsPage = require("../../pages/RewardsPage").default;

Then ("rewards for {string} are displayed",function(string){
  if (string  == "PT") {
    const ptray = RewardsPage.ptRewards;
    Object.values(ptray).forEach(function(value){
      cy.get(value).should('be.visible')
      cy.get(value).click({force:true})
      cy.get('.reward__status__label').should('be.visible')
      cy.get('.reward__reward-bar__btn-wrap > .reward__btn > .reward__btn__inner')
      .should('be.visible')
      cy.go('back')
    
    })
   
  } else if (string  == "IT") {
    const itray = RewardsPage.itRewards;
    Object.values(itray).forEach(function(value){
      cy.get(value).should('be.visible')
      cy.get(value).click({force:true})
      cy.get('.reward__status__label').should('be.visible')
      cy.get('.reward__reward-bar__btn-wrap > .reward__btn > .reward__btn__inner')
      .should('be.visible')
      cy.go('back')
    })
   
  } else if (string == "AU"){
    const auray = RewardsPage.auRewards;
    Object.values(auray).forEach(function(value){
      cy.get(value).should('be.visible')
      cy.get(value).click({force:true})
      cy.get('.reward__status__label').should('be.visible')
      cy.get('.reward__reward-bar__btn-wrap > .reward__btn > .reward__btn__inner')
      .should('be.visible')
      cy.go('back')
  })  
  }
})
