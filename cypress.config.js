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
      "PT_USER_NAME": "sapt99@mailinator.com",
      "PT_PASSWORD":`${process.env.CYPRESS_PT_PASSWORD}`,
      "ITuserName":"sait1@mailinator.com",
      "ITpassWord":"Sample123!",
      "PTURL": "https://www.ikea.com/pt/en",
      "PT_AUTH_URL":"https://pt.accounts.ikea.com/oauth/token",
      "PT_CLIENT_ID": "5ylUcKnvwzRJTN7Ieguw26jtwfaUSQzR",
      "PT_CLIENT_SECRET": "x55QDagwC_aW2MvNdlmEmoxxBMNJzY2nDE-xNGanbdHJJ_0-kL2gO_kR57ha9Wy9",
      "ITauthUrl":"https://it.accounts.ikea.com/oauth/token",
      "ITClientID": "WlOGA2kjqvo8ZvRoDQu1bQtoQV7ODyqu",
      "ITClientSecret": "QEtSGLA6LFFTXvB6krkyA-GDNQj6Up7q81aYYuOt6h9GfMDp8hZtipNItMNl6sGE",
      "ITURL": "https://www.ikea.com/it/en"
     
    }
  }
});
