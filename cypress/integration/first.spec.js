describe('My first test', () => {

    before(() => {
        cy.log("Ja wykonam się raz!")
    });

    beforeEach(() => {
        cy.log("Ja z tego co wiem wykonam się 3 razy")
    });

    afterEach(() => {
        cy.log("Ja też 3 razy się wykonam - ale trochę się spóźnie")
    });

    after(() => {
        cy.log("Halo? Jest tu kto?")
    });
    
    it('My first test step', () => {
        cy.log('1st step')
    });

    it.skip('My second test step', () => {
        cy.log('2nd step')
    });

    it('My third test step', () => {
        cy.log('3rd step')
    });

});