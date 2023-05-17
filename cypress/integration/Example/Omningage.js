describe('Omnigage', () => {
    it('Login', () => {
      cy.viewport(1700, 850);
      cy.visit("https://qa2.omningage.click/#/");
      cy.get('.btn-blue').click();
  
      
      cy.wait(3000); // Add a delay to allow the redirect to occur
  
      cy.window().then((mainWindow) => {
        cy.url().should('not.include', 'auth');
  
        cy.window().its('top').then((newWindow) => {
            cy.wait(10000);
         // cy.get(newWindow).should('have.property', 'location').and('include', 'https://omningage-qa.awsapps.com/auth/');
          cy.get(newWindow.document).find('input#gwt_username').type('muhammad.faisal');
          cy.get(newWindow.document).find('input#gwt_password').type('A12dadf125');
          cy.get(newWindow.document).find('button#wdc_login_button').click();
        });
  
        // Switch back to the main window
        cy.window().its('top').then((mainWin) => {
          cy.get(mainWin).should('equal', mainWindow);
        });
      });
  
      // Add additional assertions or test steps as needed to validate successful login
      cy.get('.dashboard-element').should('be.visible');
    });
  });
  