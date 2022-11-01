import { faker } from '@faker-js/faker';

class SignInPage {
  typeEmailAddress() {
    const emailAddress = 'ptfamilyprod@mailinator.com';
    cy.get('#username')
      .should('be.empty')
      .focus()
      .type(emailAddress)
      .should('have.value', emailAddress);
  }

  typePassWord() {
    const password ='Loyaltytest1';
    cy.get('#password')
      .should('be.empty')
      .focus()
      .type(password)
      .should('have.value', password);
  }

  clickContinueButton() {
    cy.get('.btn--emphasised > .btn__inner').should('be.visible').click();
  }

  getAlertMessage() {
    cy.get('#auth-email-missing-alert')
      .find('.a-alert-content')
      .should('be.visible')
      .as('alertMessage');
  }

  getErrorMessage() {
    cy.get('#auth-error-message-box').find('.a-list-item').should('be.visible').as('errorMessage');
  }
}

export default new SignInPage();
