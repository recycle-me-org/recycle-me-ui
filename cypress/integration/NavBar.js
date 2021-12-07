/* eslint-disable no-undef */
describe('NavBar', () => {
  it('Should display the site title', () => {
    cy.visit('https://recycle-me-org.github.io/recycle-me-ui/', () => {
      get('cy-title').should('have.text', 'Recycle Me');
    })
  })
});
