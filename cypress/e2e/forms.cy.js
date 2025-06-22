describe('Create Set Form Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
    cy.get('[data-cy="nav-cardsets"]').click();
    
    // Make the form visible before each test
    cy.get('[data-cy="toggle_form"]').click();
    cy.get('[data-cy="set_form"]').should('be.visible');
  });

  it('should show an error when submitting an empty set name', () => {
    cy.get('[name="titleInput"]').clear();
    cy.get('[data-cy="set_form"]').submit();
    cy.get('.error')
      .should('be.visible')
      .and('contain', 'TITLE CANNOT BE EMPTY');
  });

  it('should successfully submit when set name is valid', () => {
    // Get current number of card sets
    cy.get('.cardSets').then(($sets) => {
      const initialCount = $sets.length;
      
      // Submit new set
      cy.get('[name="titleInput"]').type('Test Set {enter}');
      
      // Verify a new set was added
      cy.get('.cardSets').should('have.length', initialCount + 1);
      cy.contains('.cardSets', 'Test Set').should('exist');
    });
  });
});