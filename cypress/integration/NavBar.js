/* eslint-disable no-undef */
describe('NavBar', () => {
  it('Should display the site title', () => {
    cy.visit('http://localhost:3000', () => {
      get('cy-title').should('have.text', 'Recycle Me');
    })
  })

  
});
