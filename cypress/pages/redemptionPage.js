/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable no-extra-semi */
/* eslint-disable no-unused-vars */


class redemptionPage{

   expiryDateDisplayedS() {cy.get('.reward__status__label').should('be.visible')}
   viewQRcodes(){cy.get('.reward__btn--primary > .reward__btn__inner > .reward__btn__label')
   .click({force:true})}
   isQRcodeDisplayed(){cy.get('.reward__redeemReward-rewardcard > .reward__member-card > .reward__member-card__section > .reward__member-card__code-graphic > img')
   .should('be.visible')}
   isFamilyCardDidplayed(){cy.get('.reward__redeemReward-familycard')
   .should('be.visible')}
   isNameDisplayedOnCard(){
    cy.get('.reward__redeemReward-familycard > .reward__member-card > .reward__member-card__header > .reward__member-card__name')
    .should('be.visible')
   }
   enterRedemptionPage(){
    cy.get('.reward__reward-bar__btn-wrap > .reward__btn > .reward__btn__inner')
    .click({force:true});
   }
   isConfirmedScreen(){
    cy.get('.reward__prompt__content')
    .should('be.visible');
   }

   



}

export default new redemptionPage()