class LoginPage {

       loginToApplication(username, password)
        {
        cy.get('ul#customer_menu_top a').click();
        cy.get('#loginFrm_loginname').type(username);
        cy.get('#loginFrm_password').type(password);
        cy.get("button[title='Login']").click();
        }

        
      verifyLogin()
      {
        if(cy.isElementVisible('.top.menu_account>div').and('have.text','Welcome back Akshay'))
        {
            cy.log('Able to login successfully');
        }

        else{
            cy.log('Not able to login successfully...')
        }

      }

}

export default LoginPage;