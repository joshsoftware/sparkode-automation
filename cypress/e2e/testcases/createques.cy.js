
///<reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err)
    return false
    })
    import {ques_creation } from "../../support/create_ques.comp"
    import { login } from "../../support/admin_login.comp"
  const create_question = new ques_creation()
  const adm_login= new login()  
    describe('Login as an Admin', () => {
    let data;
    before(function () {
    cy.fixture('Adminlogin.json').then(function (fdata) {
    data = fdata;
    })
    })
    it('Verify that user can login to application', () => {
    adm_login.admin_login()
    
    })
   
it('Verify that admin user can edit the existing rule', () => {
    create_question.access_ques_tab()
    create_question.enter_ques_details()
    create_question.add_test_case()   
})   
    
})
    