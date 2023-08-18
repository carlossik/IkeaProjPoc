/* eslint-disable no-const-assign */
/* eslint-disable no-extra-semi */
/* eslint-disable no-unused-vars */
class HomePage {
  ProjectsDisplayed() {
    cy.get('#card_entry_points_title')
      .find('h2')
      .should('be.visible')
      .as('Get started with your projects');
  }
  numberOfProjects = {
    SeeYourDigitalReceipts: () =>
      cy.get(
        '.card-entrypoints__grid > :nth-child(100) > :nth-child(1) > .card > .card__info > .card__text-wrapper > .card__title',
      ),
    CreateListOfFavorites: () =>
      cy.get(
        '.card-entrypoints__grid > :nth-child(2) > :nth-child(1) > .card > .card__info > .card__text-wrapper > .card__title',
      ),
    UseOurRoomPlanners: () =>
      cy.get(
        '.card-entrypoints__grid > :nth-child(3) > :nth-child(1) > .card > .card__info > .card__text-wrapper > .card__title',
      ),
    IkeaGiftRegistry: () =>
      cy.get(
        '.card-entrypoints__grid > :nth-child(4) > :nth-child(1) > .card > .card__info > .card__text-wrapper > .card__title',
      ),
  };
  verifyProjects() {
    cy.get('*[id^="rewards-reward-"]')
    .should('have.length', 10);
  }
  verifyNumberOfProjects() {
    cy.get('*[id^="rewards-reward-"]')
    .should('have.length', 10);
  }
  clickOpenHistoryButton() {
    //cy.get('.rewards__keys__balance-history-button__label')//get.rewards__keys__balance-history-button__label
    cy.get('[data-testid="open-balance-history-button"] > .rewards__btn__inner')
      .find('span')
      .should('be.visible')
      .as('History')
      .click({ force: true });
      cy.get('.rewards__modal-body').should('be.visible')
  }

  RewarHistoryButtonsdisplayed() {
    //cy.get('.rewards__keys__balance-history-button__label')
    cy.get('[data-testid="open-balance-history-button"] > .rewards__btn__inner')
    .should('be.visible');
  }
  RewardTotaldisPlayed() {
    cy.get('#rewards-total-balance > span')
    .should('be.visible');
    cy.log('reward is visible');
    return this;
  }

  clickAcceptCookie() {
    cy.get('#onetrust-accept-btn-handler')
      .should('be.visible')
      .as('Accept all cookies (including US transfers)')
      .click({ force: true });
  }

  CustomerMemberCardDisplayed() {
    cy.get('.member-card__section')
    .should('be.visible');
    return this;
  }

  HowToCollectKeysdisplayed() {
    cy.get('#earning-activities-title')
    .should('be.visible');
    return this;
  }
  memberNumber() {
    cy.get('.member-card__number');
    return this;
  }

  Faqsdisplayed() {
    cy.get('#title > :nth-child(1) > .faq__accordion__heading')
    .should('be.visible');
    cy.get('#title > :nth-child(1) > .faq__accordion__heading')
    .click({ force: true });
    return this;
  }

  countryMinimum = {
    AU: 30,
    PT:30,
    IT:30
  };
  verifyRewards() {
    this.displayedRewards.each(($el, index) => {
      $el.length().should('be.visible');
    });
  }
  EnterRewards() {
    this.displayedRewards.forEach((_reward, index) => {
      _reward.click({ force: true });
      cy.url().should('include', 'loyalty-hub/rewards/'); // => true
    });
  }
  VerifyRewardsGrid() {
    cy.get('#rewardsGrid')
    .should('be.visible');
  }
  GetKeyBalanceHistory() {
    cy.get('.rewards__balanceHistory')
    .should('be.visible');
  }
  GetTotalKeys() {
    cy.get('[data-testid="rewards-total-balance"]')
    .invoke('text').as('textFunction');
    cy.log('===== Print Value Using Invoke Command ==== ', this.textFunction);
  }
  HasEnoughBalanceForReward(countryMinimum){
    //var affordable = false
    if(Number(this.GetTotalKeys )>= countryMinimum){
      return true;
    }
    
    
  }
  GetTotalKeysOnHistoryTab() {
    cy.get('[id="rewards--history-total"]')
    .invoke('text').as('textFunction2');
    //id="rewards--history-total"
    cy.log('===== Print Value Using Invoke Command ==== ', this.textFunction);
  }
  SlideUp(slideAmount) {
    cy.get('.earning-activities__slider-touch-area')
    .click({ multiple: true, force: true });
    cy.get('.earning-activities__slider-touch-area')
    .type(
      Cypress._.repeat('{rightarrow}', slideAmount),
    );
  }

  SlideDown(slideAmount) {
    cy.get('.earning-activities__slider-touch-area')
    .click({ multiple: true, force: true });
    cy.get('.earning-activities__slider-touch-area')
    .type(
      Cypress._.repeat('{leftarrow}', slideAmount),
    );
  }
}
  
 
  export default new HomePage();