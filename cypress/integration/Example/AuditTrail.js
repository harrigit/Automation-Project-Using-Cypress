describe("Adepsi Logs", () => {
  it("Audit Trail", () => {
    cy.viewport(1700, 850);
    cy.visit("https://demo.adepsi.cloud/");
    cy.get("#mat-input-0").type("demo.admin@adepsi.cloud");
    cy.get("#mat-input-1").type("Ye3&M57g%kH?B3E$");
    cy.get(".submit-btn > .mat-ripple").click();
    cy.wait(10000);

    cy.get(":nth-child(3) > button").click();

    cy.get(".p-calendar > .ng-tns-c111-4").click();

    cy.get(".p-datepicker-year").click();
    cy.get(".p-yearpicker > :nth-child(1)").click();
    cy.get('.p-monthpicker > [tabindex="0"]').click();
    cy.get('tbody.ng-tns-c111-4 > :nth-child(1) > :nth-child(4)').click();
    cy.wait(1000);
    cy.get('.p-calendar > .ng-tns-c111-5').click();
    cy.get(".p-datepicker-year").click();
    cy.get(".p-yearpicker > :nth-child(4)").click();
    cy.get('.p-monthpicker > :nth-child(5)').click();
    cy.get('tbody.ng-tns-c111-5 > :nth-child(1) > :nth-child(4) > .p-ripple').click();
    cy.get(".search-btn").click();
    cy.wait(3000);

    cy.get(':nth-child(1) > .dropFilters > .ng-tns-c122-3 > .wrapper > .mat-menu-trigger').click();
    cy.get('#mat-checkbox-1 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.get(':nth-child(2) > .dropFilters > .ng-tns-c122-3 > .wrapper > .mat-menu-trigger').click();
    cy.get('#mat-checkbox-16 > .mat-checkbox-layout > .mat-checkbox-inner-container').click();
    cy.wait(2000);
    cy.get('.p-paginator-pages > :nth-child(4)').click();
  });
});
