const {practicePage} = require("../page_elements/Page_elements")
const practicePageElements = practicePage;

class PracticePage
{

getRadio2Btn()
{
    return cy.get(practicePageElements.radio2Btn)
}
getRadio3Btn()
{
    return cy.get(practicePageElements.radio3Btn)
}
getSuggessionField()
{
    return cy.get(practicePageElements.suggessionField)
}
getCheckBoxOption1()
{
    return cy.get(practicePageElements.checkBoxOption1)
}
getCheckBoxOption2()
{
    return cy.get(practicePageElements.checkBoxOption2)
}
getCheckBoxOption3()
{
    return cy.get(practicePageElements.checkBoxOption3)
}
getHideBtn()
{
    return cy.get(practicePageElements.hideTextbox)
}
getShowBtn()
{
    return cy.get(practicePageElements.showTextbox)
}
getDisplayedText()
{
    return cy.get(practicePageElements.displayedText)
}
getIframe()
{
    return cy.get(practicePageElements.iframe)
}

getRadioBtnSection()
{
    return cy.get(practicePageElements.radioBtnSection)
}

getTotalAmount()
{
    return cy.get(practicePageElements.totalAmount)
}

}

export default PracticePage;