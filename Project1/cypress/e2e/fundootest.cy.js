/// <reference types="cypress" />

it('linkedin test', function() {
    cy.visit('http://localhost:3000/')
    cy.get('.makeStyles-userNameSI-18 > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic').type('reshmad@gmail.com')
    cy.get('.makeStyles-pwdSI-19 > .MuiFormControl-root > .MuiInputBase-root > #outlined-basic').type('Reshu*23')
    // cy.visit('http://localhost:3000/dashboard')
    cy.wait(20000)
    cy.get(':nth-child(2) > .MuiButtonBase-root').click()
    
    // cy.get('.makeStyles-noteBorder1-30').click()
    // cy.get('.makeStyles-nameTitle2-38 > .MuiInputBase-root > .MuiInputBase-input').type('Hello')
    // cy.get('.makeStyles-takeText2-40 > .MuiInputBase-root > .MuiInputBase-input').type('Testing')
    // cy.get('.makeStyles-btnClass2-43 > .MuiButtonBase-root').click()
})