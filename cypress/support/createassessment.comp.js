export class create_assessment {
    select_assessment_tab(){
    cy.log("Accessing Assessments")
    cy.get('.ml-4.font-weight-bold').within(()=>{cy.contains('Assessments').click()})
    cy.visit('https://www.sparkode.online/admin/assessments')  
    cy.get("#plus").click()
    }

    assessment_details(){
    cy.log("Entering assessment details")    
    cy.url().should('include', 'https://www.sparkode.online/admin/assessment/create')
    cy.get("input[placeholder='Enter Assessment Title']").type('Assessment1')
    cy.get("textarea[placeholder='Enter Assessment Description']").type('Assessment Description here')
    cy.get("div[id='contact'] div[class='react-select__placeholder css-1wa3eu0-placeholder']").type('{downArrow}  ')

    cy.get("#role > .react-select__control > .react-select__value-container").type('{downArrow}  ')
    cy.get("body > main:nth-child(2) > main:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").click()
    cy.get("div[class='new-drive-wrapper ml-1 d-flex overflow-hidden flex-column w-50'] div div[class='d-flex'] input[placeholder='Easy']").type('500')
    cy.get("div[class='new-drive-wrapper ml-1 d-flex overflow-hidden flex-column w-50'] div div[class='d-flex'] input[placeholder='Medium']").type('650')
    cy.get("div[class='new-drive-wrapper ml-1 d-flex overflow-hidden flex-column w-50'] div div[class='d-flex'] input[placeholder='Hard']").type('570')
    cy.get("div[class='d-flex mt-5'] input[placeholder='Easy']").type('270')
    cy.get("div[class='d-flex mt-5'] input[placeholder='Medium']").type('265')
    cy.get("input[class='w-50 form-control']").type('380')
    cy.wait(3000)
    cy.get("button[type='button']").click()


    }
    }
