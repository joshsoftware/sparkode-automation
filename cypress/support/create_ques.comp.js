export class ques_creation
{
access_ques_tab()

{

cy.get('.ml-4.font-weight-bold').within(()=>{cy.contains('Questions').click()})
cy.visit('https://www.sparkode.online/admin/problems')  
}
enter_ques_details()
{
cy.get('#plus').click()
cy.visit('https://www.sparkode.online/admin/problem/create')
cy.get("input[placeholder='Enter Problem Title']").type('Self Assisment') 
cy.get('input[placeholder="Enter Submission Count"]').type('2') 
cy.get('input[title="Enter Time allowed in minutes"]').type('60 Minutes') 
cy.get(":nth-child(1) > #role > .react-select__control > .react-select__value-container").within(()=>{cy.contains('Select Difficulty').type('{downArrow} Hard')}).click({ multiple: true })

cy.get(":nth-child(2) > #role > .react-select__control > .react-select__value-container").within(()=>{cy.contains('Select Tags').type('{downArrow} String')}).click({ multiple: true })
cy.get('.add-problem-section-head.mb-4.px-4.d-flex.align-items-center.justify-content-between').click()
cy.get('#exampleText').type('This problem will be based on maths equations')
cy.get('button[type="button"]').click()
cy.get('.text-success.pl-5.pt-2').should('have.text','Problem created successfully now please add the test cases and templates')
}
add_test_case(){

cy.get('textarea[placeholder="Input"]').type("Demo string")
cy.get("textarea[placeholder='Output']").type("Demo String")
cy.get("input[placeholder='Marks']").type('20')
cy.get("button[class='px-5 py-2 btn btn-primary']").click()

}
}