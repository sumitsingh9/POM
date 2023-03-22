class Logout {
    logout(){
        cy.get('.oxd-userdropdown-tab .oxd-icon').click()
        
        // cy.contains('Logout').click()
        cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link')
        .eq(3).contains('Logout').then((link)=>{
            const linkname = lastlink.text()
            cy.log(linkname)
            cy.wrap(link).click()
        })
    }
}

export default Logout