import {data} from "../../pages/api/pages/data";

describe('Home', () => {
    it('should contain page title', () => {
        cy.visit('http://localhost:3000');

        cy.get('[data-testid=page-title]')
            .contains(data.home.title)

        cy.get('[data-testid=page-content]')
            .contains(data.home.content)
    })
})
