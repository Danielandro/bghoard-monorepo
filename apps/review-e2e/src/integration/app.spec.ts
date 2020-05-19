describe('review', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.contains('Board Game Hoard: Review');
  });
});
