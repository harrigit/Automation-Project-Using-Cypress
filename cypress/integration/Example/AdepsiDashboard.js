///   <reference types="cypress"/>

describe('Adepsi Automation', () => {
    it('Dashboard', () => {
        /// <reference types="cypress"/>

        //Test Steps Here
     
        cy.viewport(1700, 850) 
        cy.visit("https://demo.adepsi.cloud/");
        cy.get('#mat-input-0').type("demo.admin@adepsi.cloud");
        cy.get('#mat-input-1').type("Ye3&M57g%kH?B3E$");
        cy.get('.submit-btn > .mat-ripple').click();
        cy.wait(10000)
        // Total Card Length On Dashboard ---
        cy.get('.card');
        cy.get('.card:visible').should('have.length',8)
        // icon Check of first Card 
        cy.get('.text-blue > .mat-icon').should('have.length',1);
        cy.get(':nth-child(1) > .card > .card-body > :nth-child(1) > .card-title').should("have.length",1);

        cy.get('.card-body').contains('TOTAL CALLS');
        cy.get('.card-body').contains('CALLS TODAY');
        cy.get('.card-body').contains('TOTAL USERS');
        cy.get('.card-body').contains('INTEGRATIONS ENABLED');

        cy.get('.p-dropdown').click()

        //   // Find the option with the label "2020" and click to select it
         cy.get('.p-dropdown-items-wrapper li.p-dropdown-item')
            
            .contains('2020')
             .click({ force: true });
        cy.get(':nth-child(1) > .card > .card-body > .m-t-30 > .link').contains(785);
        cy.get(':nth-child(2) > .card > .card-body > .m-t-30 > .link').contains(0);
        cy.get(':nth-child(3) > .card > .card-body > .m-t-30 > .link').contains(11);
        cy.get(':nth-child(4) > .card > .card-body > .m-t-30 > .link').contains(1);
        cy.get('#myChart');     
    });
    
});
