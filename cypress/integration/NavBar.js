/* eslint-disable no-undef */
describe('NavBar', () => {
  it('Should display the site title', () => {
    cy.visit('/', () => {
      get('cy-title').should('have.text', 'Recycle Me');
    })
  })
});
