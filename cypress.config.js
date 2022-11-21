// const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
// const allureWriter = require("@shelex/cypress-allure-plugin/writer");

// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);

//   on(
//     "file:preprocessor",
//     createBundler({
//       plugins: [createEsbuildPlugin.default(config)],
//     })
//   );
//   allureWriter(on, config);

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents,
//     specPattern: "cypress/e2e/features/*.feature",
//     baseUrl: "https://www.saucedemo.com",
//     chromeWebSecurity: false,
//     env: {
//       allureReuseAfterSpec: true,
//     },
//   },
// });
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
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
          launchOptions.args.push('--window-size=1400,1200')
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
  },
});

