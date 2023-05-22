describe('Adepsi Setting', () => {
    it('Settings', () => {
        cy.viewport(1700, 850) 
        cy.visit("https://demo.adepsi.cloud/");
        cy.get('#mat-input-0').type("demo.admin@adepsi.cloud");
        cy.get('#mat-input-1').type("Ye3&M57g%kH?B3E$");
        cy.get('.submit-btn > .mat-ripple').click();
        cy.wait(10000)
    
        cy.get(".mat-menu-trigger").click();
        cy.get('[routerlink="/home/settings/tags"]').click();

        cy.get('.btn').click();

        //cy.get(':nth-child(1) > .form-control').click();
        cy.get('.form-control').click({multiple:true});
        cy.get('[placeholder="Tag Name"]') .type("Automatic Tag Created 39");



        cy.get('.form-control').click({multiple:true});
        cy.get('[placeholder="Description"]').type("I am Testing Tags Creation Using Cypress....");

        cy.get('.action-btn').click();

        // cy.get('mat-icon[data-mat-icon-type="font"]')
        // .contains('more_vert')
        // .click();
        cy.get(':nth-child(6) > :nth-child(7) > div.ng-tns-c119-3 > .mat-menu-trigger > .mat-icon').click();
        cy.get('.menu > :nth-child(2)').click();
        cy.get('#mat-input-2').click();
        cy.get('[data-placeholder="Reason for deletion"]').type("Deleting Using Cypress");

        cy.get('.action-btn-bg').click();


        
    });
it('Call Rule Acess', () => {
    cy.viewport(1700, 850) 
        cy.visit("https://demo.adepsi.cloud/");
        cy.get('#mat-input-0').type("demo.admin@adepsi.cloud");
        cy.get('#mat-input-1').type("Ye3&M57g%kH?B3E$");
        cy.get('.submit-btn > .mat-ripple').click();
        cy.wait(10000)
        cy.get(".mat-menu-trigger").click();
    cy.get('[routerlink="/home/settings/calls/rules/all"]').click();
    
});
    
});