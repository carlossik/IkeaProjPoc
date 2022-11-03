import { faker } from '@faker-js/faker';
import cypress from 'cypress';

class SignInPage {
  typeEmailAddress() {
    const emailAddress = Cypress.env('PTusername');
    cy.get('#username')
      .should('be.empty')
      .focus()
      .type(emailAddress)
      .should('have.value', emailAddress);
  }

  typePassWord() {
    const password =Cypress.env('PTpassword');;
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
