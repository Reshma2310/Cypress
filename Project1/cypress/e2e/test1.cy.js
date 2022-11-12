/// <reference types="cypress" />

it('google test', function() {
    cy.visit('https://www.google.co.in/')
    cy.get('.gLFyf').type('Automation Step by Step{enter}')
    // cy.get('.dmenKe > :nth-child(1) > .usJj9c > h3 > .l').click()
    cy.wait(4000)
    cy.contains('Videos').click()
})

it.only('login test', function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // cy.contains('Username').type('Admin')
    // cy.contains('Password').type('admin123')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
})