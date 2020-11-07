describe('Should sent contact message', () => {

    it('should visit page', () => {
        cy.visit('https://tertius.pl/kontakt')
        cy.url().should('include','/kontakt')
    });

    it('should incorrect fill form', () => {
        //cy.get('.preloader').invoke('css', 'display', 'none')
        cy.contains('Zgoda').click()
        cy.wait(1000)
        cy.get('.acceptance-221 input[type="checkbox"]').check()
        cy.contains('Wyślij wiadomość').click()
    });

    it('should error message be visible', () => {
        cy.contains('Przynajmniej jedno pole jest błędnie wypełnione. Sprawdź wpisaną treść i spróbuj ponownie.')
          .should('be.visible')
        cy.get('.wpcf7-not-valid-tip').should('have.length', 4)
    });

    it('should correct fill form', () => {
        cy.get('input[placeholder="Imię"]').type("Testowy")
        cy.get('input[placeholder="E-mail"]').type("gagor.sebastian@gmail.com")
        cy.get('input[placeholder="Temat"]').type("Testowy temat")
        cy.get('[placeholder="Wiadomość"]').type("Testowa wiadomość")
        cy.get('.acceptance-221 input[type="checkbox"]').check()
        cy.contains('Wyślij wiadomość').click()
    });

    it('should thank you message be visible', () => {
        cy.wait(1000)
        cy.contains('Twoja wiadomość została wysłana. Dziękujemy!').should('be.visible')
    });
});