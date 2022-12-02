export class rules {

    rule_cre(){


cy.get('.ml-4.font-weight-bold').within(()=>{cy.contains('Rules').click()})
cy.visit('https://www.sparkode.online/admin/rules')
//cy.scrollTo('bottom')
cy.get("input[placeholder='Type New Rule Here']").type("This is a demo rule")
cy.get('button[class="btn btn-primary"]').click()
//count= cy.get('.section-heading.font-weight-bold.mb-0').click()
//count.gettext()

    }
}