const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const email = 'sapt99@mailinator.com';
const password = 'Sample123!';
const client_id = '5ylUcKnvwzRJTN7Ieguw26jtwfaUSQzR';
const client_secret = 'x55QDagwC_aW2MvNdlmEmoxxBMNJzY2nDE-xNGanbdHJJ_0-kL2gO_kR57ha9Wy9';
const domain = 'devpt.accounts.ikea.com';
const setupNodeEvents = async (on, config) => {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin.default(config)] }));
  return config;
};
//const fetch = require('node-fetch');

const getAccessToken = async ({ user, pass, dom, Id, Secret }) => {
  try {
    return fetch(`https://${domain}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'password',
        client_id,
        client_secret,
        username:email,
        password,
        audience: 'https://retail.api.ikea.com',
      }),
      redirect: 'follow',
    })
      .then((response) => response.text())
      .then((result) => {
        const { access_token, error } = JSON.parse(result);
        if (error) {
          throw new Error(error);
        }
        return access_token;
      })
      .catch((err) => {
        throw new Error(err);
      });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  projectId: '3o6h3i',
  e2e: {
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
      on('task', {
        getAccessToken(email,password,client_id,client_secret) {
          return getAccessToken({
            username,
            password,
            domain,
            clientId,
            clientSecret,
          });
        },
      });
      on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin.default(config)] }));
      on('before:browser:launch', (browser = {}, launchOptions) => {
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
      specPattern: ['**/*.{feature,js}', 'cypress/support/step_definitions/**/*.{js,jsx,ts,tsx}'],
      baseUrl: 'https://www.ikea.com/pt/en/', //profile/login/',
      step_definitions: 'cypress/e2e/**/*.{cy,js,ts}',
      ///excludeSpecPattern: ['*.js'],
    },
  },
});
