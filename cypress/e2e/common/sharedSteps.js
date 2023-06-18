/* eslint-disable no-unused-vars */
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../pages/HomePage';
import RewardsPage from '../../pages/RewardsPage';


Given("I login to a market with {string}", function (string) {
    if (string  == "PT") {
        cy.loginPT();
      } else if (string  == "IT") {
        cy.loginIT();
      } else if (string == "AU"){
        cy.loginAU();
      }  
      else cy.loginPT();
  });
  // Then ("rewards for {string} are displayed",function(string){
  //   if (string  == "PT") {
  //     RewardsPage.ptRewards.array.forEach(reward => {
  //       reward.should('be.visible')
  //     });
  //   } else if (string  == "IT") {
  //     RewardsPage.itRewards.array.forEach(reward =>{
  //       reward.should('be.visible')
  //     })
  //   } else if (string == "AU"){
  //     RewardsPage.auRewards.array.forEach(reward =>{
  //       reward.should('be.visible')
  //     })
  //   }  
  // });
  
  