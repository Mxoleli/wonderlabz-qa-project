Feature: Test Practice Page Feature
    Description: The purpose of this feature is to test Practice Page features

    Background: User navigates to login page
        Given User navigates to the login page

    Scenario: Radio button validations

        When User clicks radio button3 and validate that only one radio button is checked
        When User clicks radio button2 and validate that button2 is the only checked button


    Scenario: Suggestions section validation

        When User inserts South and select South Africa from the list of options
        When User clears the field and type Republic and select the first option listed

    Scenario: show-hide section validation

        When User clicks on the hide button and validate that the element is hidden
        When User clicks on the show button and validate that the hidden element is shown

    Scenario: table section validation

        When User validates the Amount for Joe Postman from Chennai has an amount of 46
        When User validates the total amount collected is 296

    Scenario: ifrmae section validation

        When User validates that the page has an iframe and nteract with any element within the iframe

