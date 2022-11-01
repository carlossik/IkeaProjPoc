const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const setupNodeEvents = async (on, config) => {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on('file:preprocessor',createBundler({ plugins: [createEsbuildPlugin.default(config)]}),);
  return config
};

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    async setupNodeEvents(on, config) {
      await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on('file:preprocessor',createBundler({ plugins: [createEsbuildPlugin.default(config)]}),); 
      on('before:browser:launch', (browser = {}, launchOptions) => {
        // `args` is an array of all the arguments that will
        // be passed to browsers when it launches
        console.log(launchOptions.args) // print all current args
      
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          // auto open devtools
          launchOptions.args.push('--auto-open-devtools-for-tabs')
          launchOptions.args.push('--disableblinkfeatures:AutomationControlled')
        }
      
        if (browser.family === 'firefox') {
          // auto open devtools
          launchOptions.args.push('-devtools')
        }
      
        if (browser.name === 'electron') {
          // auto open devtools
          launchOptions.preferences.devTools = true
        }
      
        // whatever you return here becomes the launchOptions
        return launchOptions
      })
      return config
      
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 20000,
    chromeWebSecurity: false,
    fixturesFolder: false,
    e2e: {
      setupNodeEvents,
     specPattern: '**/*.feature',
      baseUrl: 'https://www.ikea.com/pt/en/profile/login/',
      excludeSpecPattern: ['*.js'],
   }
 
  }
})

// module.exports = defineConfig({
//   viewportWidth: 1920,
//   viewportHeight: 1080,
//   defaultCommandTimeout: 20000,
//   chromeWebSecurity: false,
  
//   fixturesFolder: false,
//   e2e: {
//     setupNodeEvents,
//     specPattern: '**/*.feature',
//     baseUrl: 'https://www.ikea.com/pt/en/profile/login/',
//     excludeSpecPattern: ['*.js'],
//     //experimentalSessionAndOrigin:true,
//     //disableblinkfeatures:AutomationControlled

   
//   },
// });
