function acceptCookies(){
    cy.get('.preloader').invoke('css', 'display', 'none')
    cy.contains('Zgoda').click()
}

describe('Should check pages', () => {

    it('should visit home page', () => {
        cy.visit('https://tertius.pl')
        cy.url().should('include','tertius.pl')
        acceptCookies()
        cy.contains('h2','Zacznij swój biznes w internecie już dziś!').should('be.visible')
        expect(true).to.be.equal(true)
        expect(3).to.be.greaterThan(2)
    });

    it('should visit about-us page', () => {
        cy.visit('https://tertius.pl/o-nas')
        acceptCookies()
        cy.url().should('include','/o-nas')
        cy.contains('h3','O nas').should('be.visible')
    });

    it('should visit offer website page', () => {
        cy.visit('https://tertius.pl/uslugi/strony-internetowe')
        acceptCookies()
        cy.url().should('include','/uslugi/strony-internetowe')
        cy.contains('h3','Strony internetowe').should('be.visible')
    });

    it('should visit offer online stores page', () => {
        cy.visit('https://tertius.pl/uslugi/sklepy-internetowe')
        acceptCookies()
        cy.url().should('include','/uslugi/sklepy-internetowe')
        cy.contains('h3','Sklepy internetowe').should('be.visible')
    });

    it('should visit offer web app page', () => {
        cy.visit('https://tertius.pl/uslugi/aplikacje-webowe/')
        acceptCookies()
        cy.url().should('include','/uslugi/aplikacje-webowe/')
        cy.contains('h3','Aplikacje webowe').should('be.visible')
    });

    it('should visit offer mobile app page', () => {
        cy.visit('https://tertius.pl/uslugi/aplikacje-mobilne')
        acceptCookies()
        cy.url().should('include','/uslugi/aplikacje-mobilne')
        cy.contains('h3','Aplikacje mobilne').should('be.visible')
    });

    it('should visit offer testing page', () => {
        cy.visit('https://tertius.pl/uslugi/testowanie')
        acceptCookies()
        cy.url().should('include','/uslugi/testowanie')
        cy.contains('h3','Testowanie').should('be.visible')
    });

    it('should visit offer wordpress plugins page', () => {
        cy.visit('https://tertius.pl/uslugi/pluginy-wordpress/')
        acceptCookies()
        cy.url().should('include','/uslugi/pluginy-wordpress/')
        cy.contains('h3','Pluginy Wordpress').should('be.visible')
    });

    it('should visit jobs page', () => {
        cy.visit('https://tertius.pl/praca')
        acceptCookies()
        cy.url().should('include','/praca')
        cy.contains('h3','Praca').should('be.visible')
    });

    it('should visit blog page', () => {
        cy.visit('https://tertius.pl/blog')
         acceptCookies()
        cy.url().should('include','/blog')
        cy.contains('h3','Blog').should('be.visible')
    });

    it('should visit contact page', () => {
        cy.visit('https://tertius.pl/kontakt')
         acceptCookies()
        cy.url().should('include','/kontakt')
        cy.contains('h3','Kontakt').should('be.visible')
    });

});