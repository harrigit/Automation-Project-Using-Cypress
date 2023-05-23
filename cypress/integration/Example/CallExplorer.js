describe('Adepsi Explorer', () => {
    it('Call Explorer(IE)', () => {
        cy.viewport(1700, 850) 
        cy.visit("https://demo.adepsi.cloud/");
        cy.get('#mat-input-0').type("demo.admin@adepsi.cloud");
        cy.get('#mat-input-1').type("Ye3&M57g%kH?B3E$");
        cy.get('.submit-btn > .mat-ripple').click();
        cy.wait(10000)
        cy.get('.activeBtn').click();


       // cy.get('.activeBtn > p').click();
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
        cy.wait(1000);
        cy.get(':nth-child(2) > .dropFilters > .ng-tns-c128-3 > .wrapper > .mat-menu-trigger').click();
        cy.wait(1000);
        cy.get('#mat-checkbox-2 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
        cy.wait(1000);
        cy.get(':nth-child(3) > .wrapper > .matadata-lable > .dropFilters').type('1234').type("{enter}");
   
       cy.get(':nth-child(4) > .dropFilters > .ng-tns-c128-3 > .wrapper > .mat-menu-trigger').click();
        cy.get('#mat-checkbox-7 > .mat-checkbox-layout').click();

        cy.get('.matadata > .wrapper > .mat-menu-trigger > .textOverflow.marginAuto > .textOverflow').click();
        //cy.get('#mat-checkbox-11 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();

        cy.get('#mat-checkbox-33 > .mat-checkbox-layout').click();
        
        cy.wait(1000);





        cy.get('.cdk-overlay-backdrop').click();
        cy.wait(1000);
        cy.get('.matadata > .matadata-lable > .dropFilters').type('hello').type("{enter}");
        cy.wait(1000);
        cy.get('[mattooltip="Save filter"]').click();
        cy.wait(2000);

        cy.get('.sv-input').type("HelloIamTesting123456789");
        cy.wait(1000);
        cy.get('.save-btn').click();
        cy.wait(4000);

        cy.get('[mattooltip="Load FIlters"]').click();


        cy.wait(5000);
        cy.get(':nth-child(3) > td > .load-btns > .delete-btn').click();
        cy.get('.action-btn-bg').click();
    });
});