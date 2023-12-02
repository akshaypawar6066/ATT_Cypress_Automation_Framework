// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


//Common Reusable Command/Methods/Functions
Cypress.Commands.add('NavigateToApplication', ()=>
{
    cy.log("Navigating to application...")
    cy.visit("https://automationteststore.com/")
   
})

Cypress.Commands.add('loginToApplication', (username, password)=>
{
   cy.get('ul#customer_menu_top a').click();
   cy.get('#loginFrm_loginname').type(username);
   cy.get('#loginFrm_password').type(password);
   cy.get("button[title='Login']").click();
   cy.get('.top.menu_account>div').should('be.visible').and('have.text','Welcome back Akshay');
});


Cypress.Commands.add('clickOnExpectedPage', (expectedPageName)=>
{
    cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category']").contains(expectedPageName).click();
})

Cypress.Commands.add('isElementVisible', (element)=>
{
    cy.get(element).should('be.visible')
});

Cypress.Commands.add('isElementExists', (element)=>
{
    cy.get(element).should('exist');
});


Cypress.Commands.add('waitForFixedTime', (timeInSecond)=>
{
    cy.wait(timeInSecond*1000)
});







