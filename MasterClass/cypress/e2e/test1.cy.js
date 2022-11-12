/// <reference types="cypress"/>

it('Google Search', function(){

    cy.visit('https://google.com')

    cy.get('.gLFyf').type('cypress examples{enter}')

    // cy.contains('Google Search').click()

    cy.wait(2000)

    cy.contains('Videos').click()
})