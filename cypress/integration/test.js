import HomePage from '../support/OrangeHRM/HomePage'
import Link from '../support/OrangeHRM/Link'
import Logout from '../support/OrangeHRM/Logout'

describe('pom', () => {
    const homepage = new HomePage();
    const logout = new Logout()
    const link = new Link()

    beforeEach(function(){
        homepage.visitHomepage();
        homepage.login()
    })

    it('',()=>{
        link.link_click('Admin')
        logout.logout()
    })
});