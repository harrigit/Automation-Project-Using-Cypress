const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'f6f6wg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern : 'cypress/integration/Example/*.js'
  },
  
});
