/* eslint-disable no-unused-vars */



const cypress = require('cypress');
const fetch = require('node-fetch');
const ptUrl = Cypress.env('PTurl')

const getAccessToken = async ({
  username,
  password,
  domain,
  clientId,
  clientSecret
}) => {
  try {
    return fetch(`https://${ptUrl}/oauth/token`, {
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

module.exports = on => {
  on('task', {
    getAccessToken({ username, password, domain, clientId, clientSecret }) {
      return getAccessToken({
        username,
        password,
        domain,
        clientId,
        clientSecret
      });
    }
  });
};