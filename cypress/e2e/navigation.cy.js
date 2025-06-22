describe('Navigation Menu Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('should load the Home page when clicking Home', () => {
    cy.get('[data-cy="nav-home"]').click();
    // Verify home page specific elements
    cy.get('h1[data-cy="header"]').should('contain', 'Study Night');
    cy.get('.homeContainer').should('exist');
  });

  it('should load the About page when clicking About', () => {
    cy.get('[data-cy="nav-about"]').click();
    // Verify about page specific elements
    cy.get('.aboutContainer').should('exist');
    cy.contains('h2', 'About Study Night').should('exist');
  });

  it('should load the Card Sets page when clicking Card Sets', () => {
    cy.get('[data-cy="nav-cardsets"]').click();
    // Verify card sets page specific elements
    cy.get('.cardPageContainer').should('exist');
    cy.contains('h2', 'Study Set Library').should('exist');
  });
});