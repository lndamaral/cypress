const el = {
    txtFind: "input[name='q']",
    txtDateOfBirth: "input[name='dob']",
    txtPhoneNumber: "input[name='phone']",
    txtLastName: "input[name='last_name']",
    txtPatientEmail: "input[name='email']",
    txtFirstName: "input[name='first_name']",
    msgNotification: "div[class*='toast-content']",
    btnAddPatient: "button:contains('Add patient')",
    btnAddAPatient: "button:contains('Add a patient')",
}

class PatientPage {

    constructor() {
        this.addPatientModal = new AddPatientModal()
    }

    clickAddPatient() {
        cy.get(el.btnAddAPatient).click()
    }

    getToastNotification() {
        return cy.get(el.msgNotification)
    }

    findPatient(query) {
        cy.get(el.txtFind).type(query)
    }
}

class AddPatientModal {

    typeFirstName(firstName) {
        cy.get(el.txtFirstName).type(firstName)
    }

    typeLastName(lastName) {
        cy.get(el.txtLastName).type(lastName)
    }

    typePatientEmail(email) {
        cy.get(el.txtPatientEmail).type(email)
    }

    typePhoneNumber(phone) {
        cy.get(el.txtPhoneNumber).type(phone)
    }

    typeDateOfBirth(dob) {
        cy.get(el.txtDateOfBirth).type(dob)
    }

    clickAddPatient() {
        cy.get(el.btnAddPatient).click()
    }
}

export default new PatientPage();