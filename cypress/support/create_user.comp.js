export class users {

user_cre()
{
    cy.get('.ml-4.font-weight-bold').within(()=>{cy.contains('Users').click()})
        cy.visit('https://www.sparkode.online/admin/users')  
        let r = (Math.random() + 1).toString(36).substring(9);
        cy.get("input[placeholder='Enter User Email']").type(r+"@gmail.com")
        cy.wait(2000)
        cy.get('.css-1wa3eu0-placeholder').click().type('{downArrow} Admin')
        cy.get('i[title="Send Invitation"]').click({force: true})

}

}
