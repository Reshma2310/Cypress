
it('google test', function(){
    cy.visit('https://www.google.com/')
    cy.get('[name="q"]')
        .type('cypress')
        .type('{enter}')
})