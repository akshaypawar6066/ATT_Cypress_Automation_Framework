
describe('Handling Automation Store Website', () => {
    it('Verify Product Count on HairCare Tab', () => {
      cy.NavigateToApplication();
        //-->USe of Component in Action class and Use of Actions Class in Actual test cases(For readability purpose)
      
      
        // cy.get("a[href*='https://automationteststore.com/index.php?rt=product/category&path']").contains("Hair Care").click();
         cy.clickOnHairCareTab();
       
       //cy.get(".fixed_wrapper").as("productName");
       cy.aliseOfProductName();
       
        //cy.get("@productName").its('length').should('be.gt',3);
        cy.ValidateNoOfProductsOnHairCareTab();
    })
})

