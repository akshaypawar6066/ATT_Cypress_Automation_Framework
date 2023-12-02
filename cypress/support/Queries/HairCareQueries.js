Cypress.Commands.add('ValidateNoOfProductsOnHairCareTab', ()=>
{
    cy.get("@productName").its('length').should('be.gt',3);
})