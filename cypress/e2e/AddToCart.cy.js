
describe('Handling Automation Store Website', () => {
    let productData;

    before('Hook for reading product details', ()=>
    {
        cy.fixture('productData.json').then((data)=>
        {
            productData=data;
        })
    })


    beforeEach('Hooks for Prerequisites', () => {
        cy.NavigateToApplication();

    })

    it('Add Product To Cart', () => {

        //cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path']").contains("Makeup").click();
        cy.clickOnMakeupPage();

        /*cy.get(".fixed>a").each((product, index, productList) => {
            if (product.text().includes('Lips')) {
                cy.wrap(product).click();
            }
        }); */
        cy.clickOnExpectedMakeupProductFromList(productData.productName);


        //cy.get(".cart").click()
        cy.clickOnAddToCartButton();
        cy.verifyProductAddedToCartOrNot();

    })


    it("Logs of product on makeup page", () => {

        //cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path']").contains("Makeup").click();
        cy.clickOnMakeupPage();


        /*cy.get(".fixed>a").each((product, index, productList) => {
            cy.log(`Index: ${index} text: ${product.text()}`);
        })
        */
        cy.logMakeupProductNamesFromList();

    });
})

