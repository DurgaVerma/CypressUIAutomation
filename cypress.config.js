const { defineConfig } = require("cypress");
const HB_ENV = process.env.HB_ENV;

module.exports = defineConfig({
  watchForFileChanges: false, //To stop test run automatically save changes
  defaultCommandTimeout: 6000,
  reporter: "cypress-mochawesome-reporter",
  projectId: "pgpjw2",
  screenshotOnRunFailure: true,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on); // implement listeners for reporter
    },
    specPattern: "cypress/integration/tests/hBLoginTest.js",
    baseUrl: `https://patient-${HB_ENV}.hellobetter.de`,
  },
});
