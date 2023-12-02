import LoginPage from "../../PageObjects/LoginPage";
import MakeUpPage from "../../PageObjects/MakeUpPage";


describe('Handling of Makeup Page', () => {

    let loginPage = new LoginPage();
    let makeupPage = new MakeUpPage();

    beforeEach('Login to application', () => {
        cy.NavigateToApplication();

        loginPage.loginToApplication(Cypress.env('username'), Cypress.env('password'));
        loginPage.verifyLogin();
    })
    it('Count No of products on Makeup Page', () => {
        cy.viewport(1200,1200)
        makeupPage.clickOnMakeUpPage();
        makeupPage.verifyCountOfProductOnMakeupPage(6);
    });

    it('Add Lipstick Product to cart and verify', () => {
        cy.viewport(1300,1300)
        makeupPage.clickOnMakeUpPage();
        makeupPage.addExpectedProductToCart('Viva Glam Lipstick');
        makeupPage.verifyProductAddedToCartOrNot('checkout/cart');
    })
})