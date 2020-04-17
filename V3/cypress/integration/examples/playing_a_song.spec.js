describe('Playing a song', () => {
    it('Plays a song from the list', () => {
        cy.visit('http://localhost:3000/songs/1150135681');
        cy.get('[data-testid="playPauseButt"]')
            .click();
        cy.get('[data-testid="playPauseButt"]')
            .should('have.value', playing);
    })
})