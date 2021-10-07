const el = {
    txtName: '#name',
    txtMobileNumber: '#phone',
    txtEmailAddress: '#email',
    txtPassword: '#password',
    txtAddress: '#address',
    btnSubmit: 'button[name=submit]'
};

class MainPage {

    typeName(name) {
        cy.get(el.txtName).type(name);
    }

    typeMobileNumber(phone) {
        cy.get(el.txtMobileNumber).type(phone);
    }

    typeEmail(email) {
        cy.get(el.txtEmailAddress).type(email);
    }

    typePassword(password) {
        cy.get(el.txtPassword).type(password);
    }

    typeAddress(address) {
        cy.get(el.txtAddress).type(address);
    }

    submit() {
        cy.get(el.btnSubmit).click();
    }

}

export default new MainPage();
