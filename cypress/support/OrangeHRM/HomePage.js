class HomePage {
    visitHomepage(){
        cy.visit(Cypress.env("OrangeHRM_HomePage"))
        cy.wait(5000)
    }

    login(){
        cy.get('input[name="username"][placeholder="Username"]').type("Admin")
        cy.get('input[name="password"][placeholder="Password"]').type("admin123")
        cy.get('button[type="submit"]').click()
    }
}

export default HomePage