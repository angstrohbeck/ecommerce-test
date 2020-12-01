describe('Successful Login Test', () => {
    const password = Cypress.env('password');
    const username = Cypress.env('username');
    it('Successful Login Scenario', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').type(username)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin > span').click()
        cy.title().should('include','My account - My Store')
    });
});

describe('Negative Login Test', () => {
    const password = Cypress.env('password');
    const username = Cypress.env('username');
    it('Invalid Password Scenario', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').type(username)
        cy.get('#passwd').type('wrongpassword')
        cy.get('#SubmitLogin > span').click()
        cy.title().should('include','Login - My Store')
    });
});

describe('Negative Login Test', () => {
    const password = Cypress.env('password');
    const username = Cypress.env('username');
    it('Invalid Username Scenario', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email').type('invalid username')
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin > span').click()
        cy.title().should('include','Login - My Store')
    });
});