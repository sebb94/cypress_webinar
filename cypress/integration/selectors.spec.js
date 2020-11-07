describe("Przykłady selektorów", () => {
    it("Przykłady selektorów", () => {
        //By tag name
        cy.get("input")
        // By attribute
        cy.get("[placeholder]")
        //By attribute name and value
        cy.get("input[name='first_name']")
        //By id
        cy.get("#contact_me")
        //By class
        cy.get(".feedback-input")
        //By multiple classes
        cy.get("[class='navbar navbar-inverse navbar-fixed-top']")
        //By two different attributes
        cy.get("[name='email'][placeholder='Email Address']")
        // By tag name, attribute with value, Id and Class name
        cy.get('input[placeholder="Email"]#inputEmail.input-full-width')
    })
})