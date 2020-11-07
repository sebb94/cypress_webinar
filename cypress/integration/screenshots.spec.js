const pages = [
    'https://tertius.pl',
    'https://tertius.pl/kontakt'
]
const sizes = ['iphone-6', 'ipad-2', [1280, 800]]
describe('Screenshots', () => {
    sizes.forEach(size => {
        pages.forEach(page => {
            it(`${page} --- ${size}`, () => {
                cy.setResolution(size)
                cy.visit(page)
                cy.get('.navbar-light').invoke('css', 'position', 'absolute')
                cy.get('.preloader').invoke('css', 'display', 'none')
                cy.get('#fb-root').invoke('css', 'display', 'none')
                cy.contains('Zgoda').click()
                cy.wait(500)
                cy.screenshot()           
            });
        });
    });
});