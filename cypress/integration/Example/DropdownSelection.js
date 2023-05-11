// Assuming you have Cypress installed and have set up your test environment

describe('Dropdown selection', () => {
    it('Selects 2020 from the dropdown', () => {
      // Visit the webpage with the dropdown
      cy.visit('https://demo.adepsi.cloud/')
      cy.get('#mat-input-0').type("demo.admin@adepsi.cloud");
        cy.get('#mat-input-1').type("Ye3&M57g%kH?B3E$");
        cy.get('.submit-btn > .mat-ripple').click();
      cy.wait(14000);
  
      cy.get('.p-dropdown').click()

    //   // Find the option with the label "2020" and click to select it
     cy.get('.p-dropdown-items-wrapper li.p-dropdown-item')
        
        .contains('2020')
         .click({ force: true })
    
        
  
      // Assert that the selected option is now "2020"
      //cy.get('.p-dropdown-label').should('contain', '2020')
    })
  })
  