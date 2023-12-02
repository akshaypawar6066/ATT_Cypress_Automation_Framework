Cypress.Commands.add('getBooksTab', ()=>
{
    return cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path']").contains("Books");

});
