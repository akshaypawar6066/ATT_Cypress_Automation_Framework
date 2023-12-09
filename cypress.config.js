const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation_Store_Website_Reports',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: {
    setupNodeEvents(on, config) {

      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    
    //baseUrl:"https://automationteststore.com"
    env: {
      username: 'TestUser321',
      password: 'Test@321',
      baseUrl:"https://jsonplaceholder.typicode.com"
    },
    retries :{
      runMode:1,   //Retries when runing spec using CLI mode   --->Default running one time--->after that retries count will run
      openMode:0      //Retries when running spec using UI mode of cypress   --->Default running one time--->after that retries count will run
     } , 
    
    
    //video:true, 
  },
});
