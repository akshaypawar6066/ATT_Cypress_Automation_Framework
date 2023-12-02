describe('Handling Automation Store Website', ()=>
{
    it("Verify Total And Out_of Stock Books Count", () => {
        cy.NavigateToApplication();

        //cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path']").contains("Books").click();
        cy.clickOnBooksTab();


        //cy.get(".thumbnails.grid.row.list-inline>div").should('have.length', 4)
        //cy.get(".thumbnails.grid.row.list-inline>div").find("div .pricetag.jumbotron").find("span").should("have.length", 2)
        cy.verifyCountOfTotalBooks(4);
        cy.verifyCountOfOutOfStockBooks(2);


    })
})