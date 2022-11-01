class HomePage {
  clickSignInButton() {
    cy.get('#nav-signin-tooltip')
      .find('span')
      .should('be.visible')
      .as('signInButton')
      .click({ force: true });
  }

  RewarKeysdisplayed(){


  }
  CustomerProjectsDisplayed(){


  }
  HowToCollectKeysdisplayed(){


  }
  Faqsdisplayed(){


  }
}

export default new HomePage();
