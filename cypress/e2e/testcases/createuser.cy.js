///<reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err)
    return false
    })
    import {users } from "../../support/create_user.comp"
    import { login } from "../../support/admin_login.comp"
  const adm_login= new login()  
   const user_creation= new users()  
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
   
it('Verify that admin can create new users', () => {
    user_creation.user_cre()
})
    })       
