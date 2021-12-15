describe('NavBar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
    it('Should display the site title', () => {
      cy.visit('/', () => {
        get('cy-title').should('have.text', 'Recycle Me');
        get('')
      })
    })
});
