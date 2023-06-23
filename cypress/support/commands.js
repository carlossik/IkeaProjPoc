/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
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

import '@testing-library/cypress/add-commands'
import cypress from 'cypress'





Cypress.Commands.add('OneLogin', (market) => {
  cy.request({
    method: 'POST',
    url: Cypress.env(`(${market})`).authUrl,
    headers: {
      'content-type':'application/x-www-form-urlencoded',
      'Authorization':'Basic WW9sYWluZS5jaGFiZXJuYXVkLXBldGl0ZWF1QGluZ2thLmlrZWEuY29tOlBvcnR1Z2FsUGlsb3QyMDIy'          
    },
    body: {
      grant_type: 'password',
      client_id:Cypress.env(`(${market})`).ClientID ,
      client_secret:Cypress.env(`(${market})`).ClientSecret ,
      username:Cypress.env(`(${market})`).userName,
      password:Cypress.env(`(${market})`).passWord,
      audience: 'https://retail.api.ikea.com',
      }
  }).then(function(response){
    this.value = response.body.access_token;
    cy.log("Value "+this.value);
        expect(response.status).to.equal(200);
        cy.setCookie('idp_reguser', this.value);
        cy.visit('https://www.ikea.com/au/en/loyalty-hub/')
        cy.clickIfExist('#onetrust-accept-btn-handler')
      
      });

 })







Cypress.Commands.add( "clickIfExist", (element) => {
  cy.get('body').then((body) => {
  cy.wait(5000).then(() => {
    if (body.find(element).length > 0) {
      cy.log('Element found, proceeding with test')
      cy.get(element).click()
    } else {
      cy.log('Element not found, skipping test')
    }
  })
  })
})
Cypress.Commands.add("loginPT", () => {
    cy.request({
      method: 'POST',
      url: ('https://pt.accounts.ikea.com/oauth/token'),
      headers: {
        'content-type':'application/x-www-form-urlencoded'          
      },
      body: {
        grant_type: 'password',
        client_id:Cypress.env('CYPRESS_PTClientID') ,
        client_secret:Cypress.env('CYPRESS_PTClientSecret') ,
        username:Cypress.env('CYPRESS_PTusername'),
        password:Cypress.env('CYPRESS_PTpassword'),
        audience: 'https://retail.api.ikea.com',
        }
    }).then(function(response){
      this.value = response.body.access_token;
      cy.log("Value "+this.value);
          expect(response.status).to.equal(200);
          cy.setCookie('idp_reguser', this.value);
          cy.visit('https://www.ikea.com/pt/en/loyalty-hub/')
          cy.clickIfExist('#onetrust-accept-btn-handler')
        });
    })
    Cypress.Commands.add("loginAU", () => {
      cy.request({
        method: 'POST',
        url: Cypress.env("au").authUrl,
        headers: {
          'content-type':'application/x-www-form-urlencoded',
          'Authorization':'Basic WW9sYWluZS5jaGFiZXJuYXVkLXBldGl0ZWF1QGluZ2thLmlrZWEuY29tOlBvcnR1Z2FsUGlsb3QyMDIy'          
        },
        body: {
          grant_type: 'password',
          client_id:Cypress.env("au").ClientID ,
          client_secret:Cypress.env("au").ClientSecret ,
          username:Cypress.env("au").userName,
          password:Cypress.env("au").passWord,
          audience: 'https://retail.api.ikea.com',
          }
      }).then(function(response){
        this.value = response.body.access_token;
        cy.log("Value "+this.value);
            expect(response.status).to.equal(200);
            cy.setCookie('idp_reguser', this.value);
            cy.visit('https://www.ikea.com/au/en/loyalty-hub/')
            cy.clickIfExist('#onetrust-accept-btn-handler')
          
          });
      })

    Cypress.Commands.add("loginIT", () => {
      cy.request({
        method: 'POST',
        url: ('https://it.accounts.ikea.com/oauth/token'),
        headers: {
          'content-type':'application/x-www-form-urlencoded'          
        },
        body: {
          grant_type: 'password',
          client_id:Cypress.env('CYPRESS_ITClientID') ,
          client_secret:Cypress.env('CYPRESS_ITClientSecret') ,
          username:Cypress.env('CYPRESS_ITuserName2'),
          password:Cypress.env('CYPRESS_ITpassWord2'),
          audience: 'https://retail.api.ikea.com',
          }
      }).then(function(response){
        this.value = response.body.access_token;
        cy.log("Value "+this.value);
            expect(response.status).to.equal(200);
            cy.setCookie('idp_reguser', this.value);
            cy.visit('https://www.ikea.com/it/it/loyalty-hub/')
            cy.clickIfExist('#onetrust-accept-btn-handler')
          });
   
        })

        Cypress.Commands.add('findElementWithText', (text) => {
          cy.get(`(${text})`);
        })



        