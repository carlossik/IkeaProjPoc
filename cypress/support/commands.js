/// 

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Cypress.Commands.add('login', (email,password) => {
//     cy.visit('/');
//     cy.signInPage.typeEmailAddress(email)
//     cy.signInPage.typePassWord(password)
//     cy.signInPage.clickContinueButton()
  // })
  Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('PTusername'),
    password = Cypress.env('PTpassword'),
    client_id = Cypress.env('PTClientID'),
    client_secret = Cypress.env('PTClientSecret')
  ) => {
    cy.request({
      method: 'POST',
      url: '/oauth/token',
      form: true,
      body: {
        username:email,
        password:password,
        grant_type: 'password',
        client_id: client_id,
        client_secret: client_secret,
        audience: 'https://retail.api.ikea.com',
      },
    });
    }).then((response) => {
      cy.setCookie('sessionId', response.body.sessionId)
      cy.setCookie('userId', response.body.userId)
      cy.setCookie('userName', response.body.userName)
      cy.visit('/')
    })
  


 