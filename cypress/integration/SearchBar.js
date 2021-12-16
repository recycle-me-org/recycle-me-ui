import { classBody } from "@babel/types";

describe('SearchBar', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
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

    // it('Should have an input container where user can type 5 digit zipcode', () => {
    //   cy.get('.search-bar__input')
    //     .should('have.value', '')
    //     .type('80220')
    //     .should('have.value', '80220')
    // });

    // it('Should click on search button after valid inputs are entered', () => {
    //   cy.get('.search-bar__button')
    //     .click()
    // });
})
