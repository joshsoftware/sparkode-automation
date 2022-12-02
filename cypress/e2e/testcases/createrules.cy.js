
///<reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err)
    return false
    })
    import {rules } from "../../support/create_rules.comp"
    import { login } from "../../support/admin_login.comp"
  const adm_login= new login()  
   const create_rule= new rules()  
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
    
    it('Verify that admin user can create new rules', () => {
    
        create_rule.rule_cre()
   

    })

    
    })
    