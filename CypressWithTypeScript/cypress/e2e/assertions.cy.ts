
it('learning assertions', function(){

    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()

    cy.get('#query-btn')
        .should('contain', 'Button')
        .should('have.class', 'query-btn')
        .should('be.visible')
        .should('be.enabled')
        // .should('be.disabled')

    cy.get('#query-btn').invoke('attr', 'id')
        .should('equal', 'query-btn')
    
    cy.get('#query-btn')
        .should('contain', 'Button')
        .and('have.class', 'query-btn')
    
        // Explicit assertions
        // expect
        expect(true).to.be.true
        //ex:2
        let name = 'Reshma'
        expect(name).to.be.equal('Reshma')

        //assert
        assert.equal(4, 4, 'Not equal')
})