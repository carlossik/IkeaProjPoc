class Login{

      login(){cy.request({
        method: 'POST', 
    url: Cypress.env('PTauthUrl'), 
    body: {
        grant_type: 'password',
        client_id:Cypress.env('PTClientID') ,
        client_secret:Cypress.env('PTClientSecret') ,
        username:Cypress.env('PTusername'),
        password:Cypress.env('PTpassword'),
        audience: 'https://retail.api.ikea.com',
          
        },
        Headers:{
            'Content-Type':'application/x-www-form-urlencoded'
         }
         }).then(function(response){
            this.value = response.body.access_token;
            cy.log("Value "+this.value);
    
           
            expect(response.status).to.equal(200);
            cy.setCookie('idp_reguser', this.value);
            cy.visit('https://www.ikea.com/pt/en/loyalty-hub/')
            cy.get('#onetrust-accept-btn-handler')
            cy.wait(1000)
            cy.get('#onetrust-accept-btn-handler').click({force:true})
            cy.wait(1000)
          });
            
      }
      loginIT(){cy.request({
        method: 'POST', 
    url: Cypress.env('ITauthUrl'), 
    body: {
        grant_type: 'password',
        client_id:Cypress.env('ITClientID') ,
        client_secret:Cypress.env('ITClientSecret') ,
        username:Cypress.env('ITusername'),
        password:Cypress.env('ITpassword'),
        audience: 'https://retail.api.ikea.com',
          
        },
        Headers:{
            'Content-Type':'application/x-www-form-urlencoded'
         }
         }).then(function(response){
            this.value = response.body.access_token;
            cy.log("Value "+this.value);
    
           
            expect(response.status).to.equal(200);
            cy.setCookie('idp_reguser', this.value);
            cy.visit('https://www.ikea.com/it/en/loyalty-hub/')
            cy.get('#onetrust-accept-btn-handler')
            cy.wait(1000)
            cy.get('#onetrust-accept-btn-handler').click({force:true})
            cy.wait(1000)
          });
            
      }

 
    }
export default new Login();


   
   