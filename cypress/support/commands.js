// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('signIn', () => {

    const environment = `environment.${Cypress.env("environment")}`

    cy.log(environment)

    cy.fixture(environment).then((data) => {
        cy.visit(data.baseUrl)
        cy.get("div[class*=visible-lg] #signInFormUsername").type(data.username)
        cy.get("div[class*=visible-lg] #signInFormPassword").type(data.password)
        cy.get("div[class*=visible-lg] input[name='signInSubmitButton']").click()
        cy.get("h1:contains('Hello, ')", { timeout: 10000 })
    })
})