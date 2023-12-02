Cypress.Commands.add('verifyCountOfTotalBooks', (expectedCount)=>
{
    cy.get(".thumbnails.grid.row.list-inline>div").should('have.length', expectedCount)

})

Cypress.Commands.add('verifyCountOfOutOfStockBooks', (expectedCount)=>
{
    cy.get(".thumbnails.grid.row.list-inline>div").find("div .pricetag.jumbotron").find("span").should("have.length", expectedCount)

})