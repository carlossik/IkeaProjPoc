/* eslint-disable cypress/no-unnecessary-waiting */
class Login{

      login(){cy.request({
        method: 'POST', 
    url: Cypress.env('PT_AUTH_URL'), 
    body: {
        grant_type: 'password',
        client_id:Cypress.env('PT_CLIENT_ID') ,
        client_secret:Cypress.env('PT_CLIENT_SECRET') ,
        username:Cypress.env('PT_USER_NAME'),
        password:Cypress.env('PT_PASSWORD'),
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

       LoginCustomerAdmin(){//cy.request({
    //     method: 'POST', 
    // url: Cypress.env('PTauthUrl'), 
    // body: {
    //     grant_type: 'password',
    //     client_id:"" ,
    //     client_secret:"" ,
    //     username:"",
    //     password:"",
    //     audience: 'https://retail.api.ikea.com',
          
       // },
       // Headers:{
            //'Content-Type':'application/x-www-form-urlencoded'
         //}
        // }).then(function(response){
            //this.value = response.body.access_token;
            //cy.log("Value "+this.value);
    
           
            //expect(response.status).to.equal(200);
           // cy.setCookie('idp_reguser', this.value);
            cy.visit('https://private.prod.customeradmin.customer.ingka.com/')
            cy.get('#username').type(Cypress.env('ITClientID'))
          //});
            
      }

 
    }
export default new Login();


   
   