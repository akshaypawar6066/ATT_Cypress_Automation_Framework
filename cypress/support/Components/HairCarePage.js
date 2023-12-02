Cypress.Commands.add('getHairCarePage', () => {
    cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path']").contains("Hair Care");

});

Cypress.Commands.add('aliseOfProductName', () => {
    cy.get(".fixed_wrapper").as("productName");
})

