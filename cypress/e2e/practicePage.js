import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

 Given('User navigates to the login page',()=> {
    cy.launch(Cypress.env("url"));
  });

  When("User clicks radio button3 and validate that only one radio button is checked",()=>{
    cy.radio_button2_validation();
  });

  
  When("User clicks radio button2 and validate that button2 is the only checked button",()=>{
    cy.radio_button3_validation();
  });

  When("User inserts South and select South Africa from the list of options",()=>{
    cy.south_suggession_validation();
  });

  
  When("User clears the field and type Republic and select the first option listed",()=>{
    cy.republic_suggession_validation();
  });

  When("User clicks on the hide button and validate that the element is hidden",()=>{
    cy.hide_Textfield_validation();
  });


  When("User clicks on the show button and validate that the hidden element is shown",()=>{
    cy.show_Textfield_validation();
  });

  When("User validates the Amount for Joe Postman from Chennai has an amount of 46",()=>{
    cy.show_Textfield_validation();
  });

  When("User validates the total amount collected is 296",()=>{
    cy.show_Textfield_validation();
  });

  When("User validates that the page has an iframe and nteract with any element within the iframe",()=>{
    cy.iframe_validation();
  });


