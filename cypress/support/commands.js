
Cypress.on('uncaught:exception', (err) => {
    console.log('Exception', err);
    return false;
});

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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('login', () => { 
//     const getUserToken = async ({ accountsApiUrl, clientId, clientSecret, username, password }) => {
//         let response;
    
//         try {
//             response = await axios.post(accountsApiUrl, {
//                 grant_type: 'password',
//                 client_id: clientId,
//                 client_secret: clientSecret,
//                 username,
//                 password,
//                 audience: 'https://retail.api.ikea.com',
//             });
//         } catch (err) {
//             console.log(err);
//         }
//         if (!response) throw new Error('Auth failed');
    
//         return response.data.access_token;
//     };

//  })
 Cypress.Commands.add('LoginPT', ()=> {
    {cy.request({
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
 
    })
    // cy.request({
    //     method: 'POST', 
    //     url: ('https://pt.accounts.ikea.com/oauth/token'), 
    //     body: {
    //         grant_type: 'password',
    //         client_id: '5ylUcKnvwzRJTN7Ieguw26jtwfaUSQzR',
    //         client_secret: 'x55QDagwC_aW2MvNdlmEmoxxBMNJzY2nDE-xNGanbdHJJ_0-kL2gO_kR57ha9Wy9',
    //         username:'sapt99@mailinator.com',
    //         password:'Sample123!',
    //         audience: 'https://retail.api.ikea.com',
          
    //     },
    //     Headers:{
    //         'Content-Type':'application/x-www-form-urlencoded'
    //      }
    //      }).then(function(response){
    //         this.value = response.body.access_token;
    //         cy.log("Value "+this.value);
    
           
    //         expect(response.status).to.equal(200);
    //         cy.setCookie('idp_reguser', this.value);
    //         cy.visit('https://www.ikea.com/pt/en/loyalty-hub/')
    //         cy.get('#onetrust-accept-btn-handler')
    //         cy.wait(1000)
    //         cy.get('#onetrust-accept-btn-handler').click({force:true})
    //         cy.wait(1000)
    //         cy.viewport
    //       });
        

            
      
      Cypress.Commands.add('LoginIT', ()=> {
        cy.request({
            method: 'POST', 
            url: ('https://it.accounts.ikea.com/oauth/token'), 
            body: {
                grant_type: 'password',
                client_id: '5ylUcKnvwzRJTN7Ieguw26jtwfaUSQzR',
                client_secret: 'x55QDagwC_aW2MvNdlmEmoxxBMNJzY2nDE-xNGanbdHJJ_0-kL2gO_kR57ha9Wy9',
                username:'sapt99@mailinator.com',
                password:'Sample123!',
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
                cy.viewport
              });
            
    
                
          })
 


 

        //   {cy.request({
        //     method: 'POST', 
        // url: Cypress.env('PTauthUrl'), 
        // body: {
        //     grant_type: 'password',
        //     client_id:Cypress.env('PTClientID') ,
        //     client_secret:Cypress.env('PTClientSecret') ,
        //     username:Cypress.env('PTusername'),
        //     password:Cypress.env('PTpassword'),
        //     audience: 'https://retail.api.ikea.com',
              
        //     },
        //     Headers:{
        //         'Content-Type':'application/x-www-form-urlencoded'
        //      }
        //      }).then(function(response){
        //         this.value = response.body.access_token;
        //         cy.log("Value "+this.value);
        
               
        //         expect(response.status).to.equal(200);
        //         cy.setCookie('idp_reguser', this.value);
        //         cy.visit('https://www.ikea.com/pt/en/loyalty-hub/')
        //         cy.get('#onetrust-accept-btn-handler')
        //         cy.wait(1000)
        //         cy.get('#onetrust-accept-btn-handler').click({force:true})
        //         cy.wait(1000)
        //       });
                
        //   }
     
        // }