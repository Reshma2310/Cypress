const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,
  defaultCommandTimeout:10000,
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },    
  },  
});