Cypress.Commands.add('clickOnMakeupPage', ()=>
{
    cy.getMakeupPage().click();
});

Cypress.Commands.add('clickOnExpectedMakeupProductFromList', (expectedProduct)=>
{
    cy.getListOfMakeupProducts().each((product, index, productList) => {
        if (product.text().includes(expectedProduct)) {
            cy.wrap(product).click();
        }
    });
});

Cypress.Commands.add('clickOnAddToCartButton', ()=>
{
    cy.getAddToCartButton().click();
})


Cypress.Commands.add('logMakeupProductNamesFromList', ()=>
{
    cy.getListOfMakeupProducts().each((product, index, productList) => {
        cy.log(`Index: ${index} text: ${product.text()}`);
    })
})

