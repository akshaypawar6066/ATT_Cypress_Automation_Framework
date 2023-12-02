//getMakeupPage

Cypress.Commands.add('clickOnHairCareTab', ()=>
{
    cy.getHairCarePage().click();
})