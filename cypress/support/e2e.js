// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-mochawesome-reporter/register';
require("cypress-xpath");

// Alternatively you can use CommonJS syntax:
// require('./commands')    


//All required Importing part

//component
import './Components/AddToCartPage'
import './Components/BookPage'
import './Components/HairCarePage'

//Actions
import './Actions/HairCareupPageAtions'
import './Actions/AddToCartActions'
import './Actions/BookPageActions'

//Queries
import './Queries/HairCareQueries'
import './Queries/AddToCartQueries'
import './Queries/BookPageQueries'