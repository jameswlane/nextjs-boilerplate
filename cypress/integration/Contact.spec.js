import {data} from "../../pages/api/pages/data";

describe('Contact', () => {
    it('should contain page title', () => {
        cy.visit('http://localhost:3000/contact');

        cy.get('[data-testid=page-title]')
            .contains(data.contact.title)

        cy.get('[data-testid=page-content]')
            .contains(data.contact.content)
    })
})
