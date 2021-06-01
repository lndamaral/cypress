const el = {
    menuDashboard: "[href='/provider/dashboard'] > span",
    menuPatients: "[href='/provider/dashboard/patients'] > span",
    menuOtherContacts: "[href='/provider/dashboard/other-contacts'] > span"
}

class MenuPage {

    visitDashboard() {
        cy.get(el.menuDashboard).click()
    }

    visitPatients() {
        cy.get(el.menuPatients).click()
        cy.get(el.menuPatients).click()
    }

    visitOtherContacts() {
        cy.get(el.menuOtherContacts).click()
    }

}

export default new MenuPage();