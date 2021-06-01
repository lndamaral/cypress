import { randomString, createNewPatient } from '../support/utils.js';

describe('Patient Suite', () => {

    it('Add new patient', () => {

        const firstName = "Patient"
        const lastName = randomString()
        const phoneNumber = "2055555555"
        const email = `telehealthos.io+apitests+${lastName}@gmail.com`

        cy.signIn()
        createNewPatient(firstName, lastName, email, phoneNumber)

    })
})