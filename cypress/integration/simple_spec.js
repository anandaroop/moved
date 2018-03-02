describe('App', function() {
  it('Plays all keyframes', () => {
    cy.visit('http://localhost:3000')
    cy.contains('moved')
    cy.contains('Goodbye', { timeout: 5000 })
    cy.contains('Hello', { timeout: 10000 })
    cy.contains('Download', { timeout: 5000 })
  })
})
