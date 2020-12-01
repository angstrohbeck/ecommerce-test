describe('Negative Account Creation Test', () => {
    it('Email must include @', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email_create').type('invalid')
        cy.get('#SubmitCreate> span').click()
        cy.title().should('include','Login - My Store')
    });
});

describe('Negative Account Creation Test', () => {
    const username = Cypress.env('username');
    it('Email already exists in system', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email_create').type(username)
        cy.get('#SubmitCreate> span').click()
        cy.title().should('include','Login - My Store')
    });
});
