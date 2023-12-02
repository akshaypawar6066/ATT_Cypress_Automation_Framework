Cypress.Commands.add('clickOnBooksTab', ()=>
{
    cy.getBooksTab().click();
})