///<reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err)
    return false
    })

    import {create_assessment } from "../../support/createassessment.comp"
    import { login } from "../../support/admin_login.comp"
  const assessment_creation = new create_assessment()
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
   
it('Verify that admin can create new users', () => {
    assessment_creation.select_assessment_tab()
    assessment_creation.assessment_details()

    })
    })
