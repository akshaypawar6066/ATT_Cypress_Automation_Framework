Cypress.Commands.add('getMakeupPage', ()=>
{
   return cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path']").contains("Makeup");
});


Cypress.Commands.add('getListOfMakeupProducts', ()=>
{
   return cy.get(".fixed>a");
});


Cypress.Commands.add('getAddToCartButton', ()=>
{
  return  cy.get(".cart");
});



