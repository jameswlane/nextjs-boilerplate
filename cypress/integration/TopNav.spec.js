describe('TopNav', () => {
    before(()=>{
        cy.visit('http://localhost:3000/')
    })

    it('should route to about page', () => {
        cy.get('[data-testid=top-nav-about]')
            .contains('About')
            .click()
        cy.url().should('include', '/about')
    })

    it('should route to home page', () => {
        cy.get('[data-testid=top-nav-home]')
            .contains('Home')
            .click()
        cy.url().should('eq', 'http://localhost:3000/')
    })

    it('should route to contact page', () => {
        cy.get('[data-testid=top-nav-contact]')
            .contains('Contact')
            .click()
        cy.url().should('include', '/contact')
    })

    it('should route to home page', () => {
        cy.get('[data-testid=top-nav-brand]')
            .contains('Next.js Boilerplate')
            .click()
        cy.url().should('eq', 'http://localhost:3000/')
    })
})
