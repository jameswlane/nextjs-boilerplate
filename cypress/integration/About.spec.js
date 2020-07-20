import {data} from "../../pages/api/pages/data";

describe('About', () => {
    it('should contain page title', () => {
        cy.visit('http://localhost:3000/about');

        cy.get('[data-testid=page-title]')
            .contains(data.about.title)

        cy.get('[data-testid=page-content]')
            .contains(data.about.content)
    })
})
