export class login {

admin_login(){    
    cy.visit('https://www.sparkode.online')
    cy.get('#exampleEmail').type('devyani.pande@joshsoftware.com')
    cy.get('#examplePassword').type('Josh123')
    cy.get('button[type="button"]').click()
}
}
