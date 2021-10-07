import { randomString } from '../support/utils.js';
import mainPage from '../support/pages/mainPage';

const user = require('../fixtures/validUser.json');

describe('Test Automation - Form', () => {

    it('Text Area Practice', () => {

        cy.init();

        mainPage.typeName(randomString());
        mainPage.typePassword(randomString());
        mainPage.typeMobileNumber(randomString());
        mainPage.typeAddress(randomString());
        mainPage.typeEmail(randomString());
        mainPage.submit();

    });

    it('Text Area Practicewith Fixture', () => {

        cy.init();

        mainPage.typeName(user.name);
        mainPage.typePassword(user.password);
        mainPage.typeMobileNumber(user.phone);
        mainPage.typeAddress(user.address);
        mainPage.typeEmail(user.email);
        mainPage.submit();
    });
});
