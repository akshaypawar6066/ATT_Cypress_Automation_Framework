Cypress.Commands.add('verifyProductAddedToCartOrNot', ()=>
{
    cy.url().should('eq', 'https://automationteststore.com/index.php?rt=checkout/cart');
        if (cy.xpath("(//a[text()='Viva Glam Lipstick'])[2]").should('include.text', 'Viva Glam Lipstick')) {
            cy.log("Able to add product into the cart...")
        }
});


