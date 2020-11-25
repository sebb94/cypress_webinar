describe('Should sent contact message', () => {

    it('should visit page', () => {
        cy.visit('https://tertius.pl/kontakt')
        cy.url().should('include','/kontakt')
    });

    it('should incorrect fill form', () => {
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
        cy.fixture('subjects').then(subject =>{
            let randomNumber = Math.floor(Math.random() * 3) + 1;
            cy.get('input[placeholder="Imię"]').type("Testowy")
            cy.get('input[placeholder="E-mail"]').type("gagor.sebastian@gmail.com")
            if(randomNumber == 1){
                cy.get('[placeholder="Temat"]').type(subject.subject_1)
            }else if( randomNumber == 2){
                cy.get('[placeholder="Temat"]').type(subject.subject_2)
            } else if (randomNumber == 3){
                cy.get('[placeholder="Temat"]').type(subject.subject_3)
            }
            cy.get('[placeholder="Wiadomość"]').type("Testowa wiadomość")
            cy.get('.acceptance-221 input[type="checkbox"]').check()
            cy.contains('Wyślij wiadomość').click()
        })
    
    });

    it('should thank you message be visible', () => {
        cy.wait(1000)
        cy.contains('Twoja wiadomość została wysłana. Dziękujemy!').should('be.visible')
    });
});