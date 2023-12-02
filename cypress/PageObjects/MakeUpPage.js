class MakeUpPage {

    clickOnMakeUpPage() {
        cy.clickOnExpectedPage('Makeup');

    }

    verifyCountOfProductOnMakeupPage(expectedCount)
    {
        cy.get('.fixed_wrapper').should('have.length',expectedCount);
    }

    addExpectedProductToCart(expectedProductText)
    {
        cy.get('.fixed_wrapper a').each(($product, index, $productList)=>
        {
            if($product.text().includes(expectedProductText))
            {
                cy.wrap($product).click();
                cy.get('.cart').should('be.visible').click();
                
            }
        })
    };

    verifyProductAddedToCartOrNot(expectedUrlEndPoint)
    {
     cy.url().should('include', expectedUrlEndPoint);
    }

}

export default MakeUpPage;

