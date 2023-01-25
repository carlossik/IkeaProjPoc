/* eslint-disable no-undef */
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const{lighthouse,prepareAudit} = require('@cypress-audit/lighthouse')
const setupNodeEvents = async (on, config) => {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin.default(config)] }));
  return config;
};

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  projectId: '3o6h3i',
  e2e: {
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      
      on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin.default(config)] }));
      on('task',{
        lighthouse:lighthouse()
      })
      //on('before:browser:launch', (browser = {}, launchOptions) => {prepareAudit(launchOptions) return launchOptions});
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions) 
        // `args` is an array of all the arguments that will
        // be passed to browsers when it launches
        console.log(launchOptions.args); // print all current args
        console.log(browser.family, 'This is the options');

        if (browser.family === 'chromium' && browser.name !== 'electron') {
          // auto open devtools
          console.log(browser.family, 'This is the options2');
          launchOptions.args.push('--auto-open-devtools-for-tabs');
          launchOptions.args.push('--disableblinkfeatures');
          launchOptions.args.push('--disableblinkfeatures=AutomationControlled');
        }

        if (browser.family === 'firefox') {
          // auto open devtools
          launchOptions.args.push('-devtools');
          launchOptions.args.push('--marionette:false');
        }

        if (browser.name === 'electron') {
          // auto open devtools
          launchOptions.preferences.devTools = true;
        }

        // whatever you return here becomes the launchOptions
        return launchOptions;
      });
      return config;
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 20000,
    chromeWebSecurity: false,
    fixturesFolder: false,
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    e2e: {
      setupNodeEvents,
      specPattern: "cypress/e2e/features/*.feature",
      baseUrl: 'https://www.ikea.com/pt/en/', //profile/login/',
      step_definitions: 'cypress/e2e/**/*.{cy,js,ts}',
      ///excludeSpecPattern: ['*.js'],
    },
    env: {
      "pt_username": `${process.env.PT_USER_NAME}`,
      "pt_password":`${process.env.PT_PASSWORD}`,
      "itusername":`${process.env.IT_USER_NAME}`,
      "itpassword":`${process.env.IT_PASSWORD}`,
      "pturl": `${process.env.PTURL}`,
      "pt_auth_url":`${process.env.PT_AUTH_URL}`,
      "pt_client_id": `${process.env.PT_CLIENT_ID}`,
      "pt_client_secret": `${process.env.PT_CLIENT_SECRET}`,
      "itauthurl":`${process.env.IT_AUTH_URL}`,
      "itclientid": `${process.env.IT_CLIENT_ID}`,
      "itclientsecret": `${process.env.IT_CLIENT_SECRET}`,
      "iturl": `${process.env.ITURL}`
     
    }
  }
});
