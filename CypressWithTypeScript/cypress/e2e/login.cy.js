import {LoginPage} from "../pages/login_page.cy"

const loginPage = new LoginPage()

it('login test', function(){

    loginPage.navigate('https://trytestingthis.netlify.app/');
    loginPage.enterUserName('test');
    loginPage.enterPassword('test');
    loginPage.clickLogin();
    //  cy.visit('https://trytestingthis.netlify.app/')
    //  cy.get('#uname').type('test')
    //  cy.get('#pwd').type('test')
    //  cy.get('[type="submit"]').click()
})