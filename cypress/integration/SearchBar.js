import { classBody } from "@babel/types";

describe('SearchBar', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/recycle-me-ui');
  })

    it('Should have an input container where user can select material', () => {
      Cypress.Commands.add('setSelectOption', ({ selector, option, value }) => {
        cy.get(selector)
          .find('.css-1s2u09g-control')
          .focus()
          .type(option, { force: true })
          .should('have.value', '#1 Plastic Bags')
          .find('input')
          .eq(1)
          .should('have.value', value)
        cy.get(`${selector} .Select-control input`).first()
          .click({ force: true }).type(text, { force: true })
          .get('.Select-menu').contains(option)
          .click({ force: true })
          .select('#1 Plastic Bags').should('have.value', '#1 Plastic Bags')
      });
    });
})
