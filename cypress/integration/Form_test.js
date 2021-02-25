//Write tests here
describe('Forms App', () => {
    beforeEach(() => {
        //arbitrary code that runs
        //before each test
        //eslint-disable-next-line no-undef
        cy.visit('http://localhost:3000')
    })
    //tests go here
    //'it' is a test/'expect' is an assertion.
    //there can be several assertions per test
    it('making sure tests work', () => {

    })

    // it('Selecting Name Input', () => {
    //     cy.get('input[name="first_name"]').should('exist');
    //     cy.get('input[name="test"]').should('not.exist')
    // })

    it('Checking Name Input Value', () => {
        //grab the inputs 
        //assert they're empty 
        //type in em
        //assert that the thing we typed is there
        cy.get('input[name="first_name"]').should('have.value', '')
        cy.get('input[name="first_name"]').type('Ryan Dill')
        cy.get('input[name="first_name"]').should('have.value', 'Ryan Dill')
    })

    it('Typing Email Input Value', () => {
        cy.get('input[name="email"]').type('fakeEmail@fake.com')
    })

    it('Typing Password Input Value', () => {
        cy.get('input[name="password"]').type('fakepassword')
    })

    it('Checking Terms of Service', () => {
        cy.get('input[name="tos"]').should('have.value', 'true')
    })

    it('Checking to see if user can hit submit / checking form validation', () => {
        cy.get('button').should('be.disabled')
        cy.get('input[name="first_name"]').type('HELLO')
        cy.get('button').should('be.disabled')
        cy.get('input[name="first_name"]').clear()
        cy.get('input[name="email"]').type('fakeEmail@fake.com')
        cy.get('button').should('be.disabled')
        cy.get('input[name="email"]').clear()
        cy.get('input[name="password"]').type('fakepassword')
        cy.get('button').should('be.disabled')
        cy.get('input[name="first_name"]').type('HELLO')
        cy.get('input[name="email"]').type('fakeEmail@fake.com')
        cy.get('input[name="tos"]').type('true')
        cy.get('button').should('not.be.disabled')
    })
})