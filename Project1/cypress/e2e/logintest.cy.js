/// <reference types="cypress" />

it('linkedin test', function() {
    cy.visit('https://www.linkedin.com/login/')
    cy.get('#username').type('dreshma253@gmail.com')
    cy.get('#password').type('Reshu*1994')
    cy.get('.btn__primary--large').click()
    cy.get('.global-nav__primary-items > :nth-child(2) > .app-aware-link > .t-12').click()
    cy.get('#ember1287 > .mn-community-summary__info-container > .mn-community-summary__entity-info').click()
})