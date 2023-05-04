/// <reference types="cypress"/>
describe('My First Test Suit', () => {
    it('My First Test Case', () => {
        //Test Steps Here
     
        cy.viewport(1700, 850) 
        cy.visit("https://demo.adepsi.cloud/");
        cy.get('#mat-input-0').type("demo.admin@adepsi.cloud");
        cy.get('#mat-input-1').type("Ye3&M57g%kH?B3E$");
        cy.get('.submit-btn > .mat-ripple').click();
        cy.wait(6000)
        cy.get('.activeBtn > p').click();
        cy.get('.p-calendar > .ng-tns-c110-4').click();
        cy.get('.p-datepicker-year').click();
        cy.get('.p-yearpicker > :nth-child(1)').click();
        cy.wait(1000)
        cy.get('.p-monthpicker > [tabindex="0"]').click();
        cy.get(':nth-child(1) > :nth-child(4) > .p-ripple').click();
        cy.get('.p-calendar > .ng-tns-c110-5').click();
         cy.wait(1000);
        cy.get('.p-calendar > .ng-tns-c110-5').click();
        cy.get('.p-datepicker-year').click();
        cy.get('.p-yearpicker > :nth-child(3)').click();
        cy.get('.p-monthpicker > :nth-child(4)').click();
        cy.get(':nth-child(1) > :nth-child(6) > .p-ripple').click();
        
       
        cy.wait(3000);
        cy.get(':nth-child(1) > .wrapper > .matadata-lable > .dropFilters').type("Karol Mcclure").type("{enter}");

        cy.wait(6000);

        cy.get('.p-datatable-thead > tr.ng-tns-c128-3 > .dropdwon-filter').should('have.length',3);



        // cy.get(':nth-child(2) > .dropFilters > .ng-tns-c128-3 > .wrapper > .mat-menu-trigger > :nth-child(2) > .material-icons').click();

        // cy.get('#mat-checkbox-1 > .mat-checkbox-layout > .mat-checkbox-label > .mat-tooltip-trigger > span').click();
        // cy.wait(5000)
    
        // cy.get('.mat-ripple > .d-flex > .textOverflow').click();
        // cy.wait(5000);
        
    
    });
    
   
});