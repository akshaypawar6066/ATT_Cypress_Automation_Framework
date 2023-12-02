import LoginPage from "../../PageObjects/LoginPage";

describe('Login Page Test', ()=>
{
    it.only('Login to application', ()=>
    {
        let loginPage=new LoginPage();

       cy.NavigateToApplication();
       loginPage.loginToApplication(Cypress.env('username'), Cypress.env('password'));
       loginPage.verifyLogin();
    })
})