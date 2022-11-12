export class LoginPage {

    openSignUp() {
        cy.get('[data-cy=login-menu]').click();
        cy.contains('Sign up here').click();
    }

    signUpAndLogin() {
        cy.get('[data-cy=signup-email]').type('reshma12@gmail.com')
        cy.get('[data-cy=signup-password]').type('1234')
        cy.get('[data-cy=signup]').click()
    }
}