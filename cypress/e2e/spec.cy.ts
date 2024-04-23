describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.visit('/');
  }
  );

  it('has app title, shows proper command by default and reacts on command changes', () => {

    cy.contains('Hello, Spielwiese');
    cy.get('h1').should('contain','Hello, Spielwiese');

  })
})
