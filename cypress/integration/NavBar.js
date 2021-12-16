describe('NavBar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/recycle-me-ui')
  })

    it('Should display the site title', () => {
      cy.visit('/', () => {
        get('cy-title').should('have.text', 'Recycle Me');
        get('.nav-link-1').should('have.text', 'Recycle Item');
        get('.nav-link-2').should('have.text', 'Articles');
        get('.nav-link-3').should('have.text', 'Creators');
      })
    })

    it('Should navigate user to team page when they click on \'Creators\' link', () => {
      cy.get('.nav-link-3').contains('Creators')
        .click()
        .url()
        .should('include', '/creators')
    });
});
