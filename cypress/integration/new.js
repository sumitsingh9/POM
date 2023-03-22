
describe('first test suite', () => {
    it('test case', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')     
        cy.get('input[name="username"][placeholder="Username"]').type("Admin")
        cy.get('input[name="password"][placeholder="Password"]').type("admin123")
        cy.get('button[type="submit"]').click()

        cy.contains('Admin').click()
        cy.get('.oxd-userdropdown-tab .oxd-icon').click()
        cy.contains('Logout').click()
    });
});