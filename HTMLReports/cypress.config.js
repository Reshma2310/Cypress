const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "watchForFileChanges": true,
  "reporter": "mochawesome",
  "reporterOptions":{
      "charts":true,
      "overwrite":false,
      "html":false,
      "json":true,
      "reportDir":"cypress/reports"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
