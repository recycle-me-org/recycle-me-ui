describe('Creators', () => {
  it('Should display Meet the Team! and all team members', () => {
    cy.visit('http://localhost:3000/creators')
    cy.get('h2.frontend').should('have.text', 'Frontend')
    cy.get('h2.backend').should('have.text', 'Backend')
    cy.get('.frontend-container > :nth-child(2)').should('exist')
      .contains('SARAH RUDY')
    cy.get('.backend-container > :nth-child(2)').should('exist')
      .contains('MICHAEL MATTSON')
    cy.get('.frontend-container > :nth-child(3)').should('exist')
      .contains('RAQUEL HILL')
    cy.get('.backend-container > :nth-child(3)').should('exist')
      .contains('HENRY SCHMID')
    cy.get('.frontend-container > :nth-child(4)').should('exist')
      .contains('ANTHONY IACONO')
    cy.get('.backend-container > :nth-child(4)').should('exist')
      .contains('EZZEDINE ALWAFAI')
  });
})