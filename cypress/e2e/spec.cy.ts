describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.visit('/');
  }
  );

  it('has app title, shows proper command by default and reacts on command changes', () => {

    cy.contains('Die Spielwiese');
    cy.get('h1').should('contain','Die Spielwiese');

  })


})

describe('', () => {
  it('should return the page title of Signals', () => {
    cy.visit('/signals');
    cy.get('h1').should('contain', 'Angular Signals');
  })
})