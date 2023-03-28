/*
    I have used this command file since this is a small project.
    If it was a big project I was going to have different files for each page
*/
/// <refrenece type = "Cypress"/>
/// <refrenece type = "cypress-iframe"/>
import 'cypress-iframe'
import PracticePage from "./page-objects/PracticePage";
const practicePage = new PracticePage();


Cypress.Commands.add("launch", (url) => { 
    cy.visit(url)
  })
  
  Cypress.Commands.add("radio_button2_validation", () => { 
   
    practicePage.getRadio2Btn().check().should('be.checked')
   
  })
  Cypress.Commands.add("radio_button3_validation", () => { 
   
    practicePage.getRadio3Btn().check().should('be.checked')
   
  })

  Cypress.Commands.add("radio_button_Section", () => { 
   
    practicePage.getRadioBtnSection().should('be.visible')
   
  })

  Cypress.Commands.add("south_suggession_validation", () => { 
   
    practicePage.getSuggessionField().type('South Africa')

    cy.get('.ui-menu-item div').each(($e1, index, $list) => {

      if($e1.text()==="South Africa")
      {
          $e1.click()
      }
    })

  })

  Cypress.Commands.add("republic_suggession_validation", () => { 
   
    practicePage.getSuggessionField().clear()
    practicePage.getSuggessionField().type('Republic')
    
    cy.get('.ui-menu-item div').each(($e1, index, $list) => {

      if($e1.text()==="Central African Republic")
      {
          $e1.click()
      }
    })
  })

  Cypress.Commands.add("suggession_field", () => { 
   
    practicePage.getSuggessionField().should('be.visible')
  })

  Cypress.Commands.add("checkboxes_validation", () => { 
   
    practicePage.getCheckBoxOption1().check().should('be.checked').and('have.value','option1')
    practicePage.getCheckBoxOption2().check().should('be.checked').and('have.value','option2')
    practicePage.getCheckBoxOption3().check().should('be.checked').and('have.value','option3')
   
  })

  Cypress.Commands.add("hide_Textfield_validation", () => { 
   
    practicePage.getHideBtn().click()
    practicePage.getDisplayedText().should('not.be.visible')
   
  })

  Cypress.Commands.add("show_Textfield_validation", () => { 
   
    practicePage.getShowBtn().click()
    practicePage.getDisplayedText().should('be.visible')
   
  })


  Cypress.Commands.add("table_Postman_validation", () => { 
   
    cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

      const text=$e1.text()
      if(text.includes("Postman"))
      {
  
          cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
          {
           const priceText=   price.text()
           expect(priceText).to.equal('46')
          })
      }
  
  })
  })

  Cypress.Commands.add("toltalAmount_validation", () => { 
   
    practicePage.getTotalAmount().contains('296')
   
  })

  
  Cypress.Commands.add("iframe_validation", () => { 
   
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find('[href="practice-project"]').should('be.visible')
   
  })

