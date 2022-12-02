
///<reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err)
    return false
    })
    import {drive } from "../../support/drive_creation.comp"
    import { login } from "../../support/admin_login.comp"
  const adm_login= new login()  
   const drive_creation= new drive()  
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
    
    it('Verify that admin user can add a new drive', () => {
        drive_creation.drive_cre()
    })
    
    })
    