
before(() => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
})

  it.only("Test 1", () => {
     cy.get('[placeholder="Jane Doe"]').type('Hello');
  })
  
  it('Test 2', () => {
      cy.get('[placeholder="Jane Doe"]').type('Hello');
  })

describe("Before each method", () => {
  beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.log(`Open "Form Layouts"...`);
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[title="Form Layouts"]').click();
  })
  
    it.only("Test 1", () => {
       cy.get('[placeholder="Jane Doe"]').type('Hello');
    })
    
    it('Test 2', () => {
        cy.get('[placeholder="Jane Doe"]').type('Hello');
    })


    after(() => {
      cy.log("Hello");
    })
    
      it.only("Test 1", () => {
         cy.get('[placeholder="Jane Doe"]').type('Hello');
      })
      
      it('Test 2', () => {
          cy.get('[placeholder="Jane Doe"]').type('Hello');
      })
    })  