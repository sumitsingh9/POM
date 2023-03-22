class Link {
    link_click(links){
        cy.contains(links).click()
    }
}

export default Link

