require('./commands');
import './commands.js'

// eslint-disable-next-line no-unused-vars
Cypress.on('uncaught:exception', (err) => {
  return false;
});
