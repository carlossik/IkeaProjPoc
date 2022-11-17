 //require('./commands');
 //import './commands.js'

 // eslint-disable-next-line no-unused-vars
// Cypress.on('uncaught:exception', (err) => {
//   return false;
// });

   //Cypress.on('uncaught:exception', (err, runnable) => {
   // returning false here prevents Cypress from
 // failing the test
   //return true
  // })
  import fetch from 'node-fetch';

const getAccessToken = async ({
  username,
  password,
  domain,
  clientId,
  clientSecret
}) => {
  try {
    return fetch(`https://${Cypress.env('PTauthUrl')}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        grant_type: 'password',
        client_id: clientId,
        client_secret: clientSecret,
        username,
        password,
        audience: 'https://retail.api.ikea.com'
      }),
      redirect: 'follow'
    })
      .then(response => response.text())
      .then(result => {
        const { access_token, error } = JSON.parse(result);
        if (error) {
          throw new Error(error);
        }
        return access_token;
      })
      .catch(err => {
        throw new Error(err);
      });
  } catch (err) {
    throw new Error(err);
  }
};