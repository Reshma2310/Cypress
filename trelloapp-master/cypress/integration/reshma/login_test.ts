import {LoginPage} from '../../support/pageObjects/loginPage'

const login = new LoginPage;

it('Login test', ()=> {
    cy.visit('/');
    login.openSignUp();
    login.signUpAndLogin();
    // cy.get('[data-cy=login-menu]').click();
    // cy.contains('Sign up here').click();
    // cy.get('[data-cy=signup-email]').type('reshma@gmail.com')
    // cy.get('[data-cy=signup-password]').type('1234')
    // cy.get('[data-cy=signup]').click()
})