import { v4 as uuidv4 } from 'uuid';
import menu from '../support/pages/menuPage.js';
import patientPage from '../support/pages/patientPage';

export const randomString = () => {
    return uuidv4()
}

export const createNewPatient = (firstName, lastName, email, phoneNumber) => {

    menu.visitPatients()

    patientPage.clickAddPatient()
    patientPage.addPatientModal.typeFirstName(firstName)
    patientPage.addPatientModal.typeLastName(lastName)
    patientPage.addPatientModal.typePatientEmail(email)
    patientPage.addPatientModal.typePhoneNumber(phoneNumber)
    patientPage.addPatientModal.clickAddPatient()
    patientPage.getToastNotification().should("have.text", "Patient added")

    patientPage.findPatient(lastName)

    return { firstName, lastName, email, phoneNumber }
}