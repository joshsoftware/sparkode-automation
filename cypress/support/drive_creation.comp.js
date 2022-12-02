export class drive {

drive_cre(){
cy.get('.ml-4.font-weight-bold').within(()=>{cy.contains('New Drive').click()})
    cy.visit('https://www.sparkode.online/admin/drive/create')
    cy.get("input[placeholder$='Enter Drive Title']").type('Demo2')
    cy.get("textarea[placeholder='Enter Drive Description']").type('This is demo description for drive creation')
    cy.get(":nth-child(2) > :nth-child(1) > .form-control").click().type('2023-02-05T08:30')
    cy.get(":nth-child(2) > :nth-child(2) > .form-control").click().type('2023-02-05T08:30')
    cy.get(".react-select__placeholder").click().type('onkar {downArrow}  ')
    cy.get("button[type='button']").click()    
}
}