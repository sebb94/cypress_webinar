describe('validate login on web zero app', () => {
    
    it('should visit page', () => {
        cy.visit('http://zero.webappsecurity.com/')
    });

    it('shoud validate page heading', () => {
        cy.contains('h4','Online Banking')
    });

    it('should go to login page', () => {
        cy.get('#signin_button').click()
    });

    it('should incorrect fill form', () => {
        // direct string version
        //cy.get('#user_login').type("username")
        //cy.get('#user_password').type("password")
        cy.fixture('users').then(users => {
            cy.get('#user_login').type(users.invalid_user)
            cy.get('#user_password').type(users.invalid_password)
        })
        cy.get('[name="submit"').click()
    });

    it('should validate error message', () => {
        cy.contains('Login and/or password are wrong.').should('be.visible')
    });

    it('should correct fill form', () => {
        // direct string version
        //cy.get('#user_login').type("username")
        //cy.get('#user_password').type("password")
        //fixtures version
        cy.fixture('users').then(users => {
            cy.get('#user_login').type(users.valid_user)
            cy.get('#user_password').type(users.valid_password)
        })
        cy.get('[name="submit"').click()
    });

    it('should validate profile page', () => {
        cy.get('.icon-user').should('be.visible')
        cy.contains('h2','Cash Accounts').should('be.visible')
    });

});