describe('My First Test Suit', () => {
    it('My First Test Case', () => {
        //Test Steps Here
     
        cy.viewport(1700, 850) 
        cy.visit("https://demo.adepsi.cloud/");
        cy.get('#mat-input-0').type("demo.admin@adepsi.cloud");
        cy.get('#mat-input-1').type("Ye3&M57g%kH?B3E$");
        cy.get('.submit-btn > .mat-ripple').click();
    });
   
});