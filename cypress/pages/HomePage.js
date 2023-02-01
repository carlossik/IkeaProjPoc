/* eslint-disable no-extra-semi */
/* eslint-disable no-unused-vars */
class HomePage {

    ProjectsDisplayed(){
        cy.get('#card_entry_points_title')
        .find('h2')
        .should('be.visible')
        .as('Get started with your projects')
    }
    numberOfProjects ={
        SeeYourDigitalReceipts: () => cy.get('.card-entrypoints__grid > :nth-child(100) > :nth-child(1) > .card > .card__info > .card__text-wrapper > .card__title'),
        CreateListOfFavorites :() => cy.get('.card-entrypoints__grid > :nth-child(2) > :nth-child(1) > .card > .card__info > .card__text-wrapper > .card__title'),
        UseOurRoomPlanners : () => cy.get('.card-entrypoints__grid > :nth-child(3) > :nth-child(1) > .card > .card__info > .card__text-wrapper > .card__title'),
        IkeaGiftRegistry : () => cy.get('.card-entrypoints__grid > :nth-child(4) > :nth-child(1) > .card > .card__info > .card__text-wrapper > .card__title')
    }
    verifyProjects(){
        this.numberOfProjects.forEach((_project, index) => {
            _project.should('be.visible')
            return this

        })
    }
    verifyNumberOfProjects(){
        cy.get('.card-entrypoints__grid').find('.card_title')
        .then(projects => {
            const projCount = Cypress.$(projects).length;
            cy.log(projCount)
            expect(projCount).to.have.length(4);
          });
    }
    clickOpenHistoryButton() {
        cy.get('#openHistory > :nth-child(1)')
        .find('span')
        .should('be.visible')
        .as('History')
        .click({ force: true });
    }
  
    RewarHistoryButtonsdisplayed()
    {
    cy.get('.rewards__keys__balance-history-button__label')
    .should('be.visible')
    }
    RewardTotaldisPlayed(){
        cy.get('#rewards-total-balance > span')
        .should('be.visible')
        cy.log('reward is visible')
        return this
    }
    
  clickAcceptCookie() {
    cy.get('#onetrust-accept-btn-handler')
    .should('be.visible')
        .as('Accept all cookies (including US transfers)')
        .click({ force: true });
  }

    CustomerMemberCardDisplayed(){
        cy.get('.member-card__section')
        .should('be.visible')
        return this
    }

    HowToCollectKeysdisplayed()
    {
    cy.get('#earning-activities-title')
    .should('be.visible')
    return this
    }
    memberNumber(){
        cy.get('.member-card__number')
        return this
    }

    Faqsdisplayed()
    {
        cy.get('#title > :nth-child(1) > .faq__accordion__heading')
        .should('be.visible')
        cy.get('#title > :nth-child(1) > .faq__accordion__heading').click({force:true})
        return this
  
    }
   
    displayedRewards = {
        cakeAndHotDrinkForOne: () => cy.get('#rewards-reward-4989 > .rewards__rewards__inner'),
        voucherForDeliveryOrCollect: () => cy.get('#rewards-reward-4903 > .rewards__rewards__inner'),
        cakeAndHotDrinkForTwo: () => cy.get('#rewards-reward-4988 > .rewards__rewards__inner'),
        ikeaProductVoucher10: () => cy.get('#rewards-reward-4908 > .rewards__rewards__inner'),
        completeMealForOne: () => cy.get('#rewards-reward-4907 > .rewards__rewards__inner'),
        ikeaProductVoucher15: () => cy.get('#rewards-reward-4902 > .rewards__rewards__inner'),
        voucherForHomeDelivery39: () => cy.get('#rewards-reward-4900 > .rewards__rewards__inner'),
        voucherForClickAndCollect: () => cy.get('#rewards-reward-4904 > .rewards__rewards__inner'),
        voucherForSidewalkDelivery: () => cy.get('#rewards-reward-4898 > .rewards__rewards__inner'),
        completeMealForTwo: () => cy.get('#rewards-reward-4901 > .rewards__rewards__inner')
        
      };
      verifyRewards(){
        this.displayedRewards.forEach((_reward, index) => {
            _reward.should('be.visible')
            console.log('Index: ' + index + ' Value: ' + _reward);
        });
      };
      EnterRewards(){
        this.displayedRewards.forEach((_reward, index) => {
            _reward.click({force: true})
            cy.url().should('include', 'loyalty-hub/rewards/') // => true
        });
    };
      
      
  }
  
 
  export default new HomePage();