Feature: Verify Rewards Displayed For User

    Background: Navigate to Home Page

    Scenario: Reward Keys are displayed
        Given I am on the home page
        Then my reward keys should be displayed
        Then the number of rewards displayed are 12
        Then total Keys are displayed
        Then History button is displayed


    Scenario: Projects are Displayed
        Given I am on the Home page
        Then my projects will be displayed
        Then Total number of projects displayed is 3

    Scenario: How to collect reward Keys is Visible to user
        Given I am on the Home page
        Then How to collect reward keys is displayed
        
    Scenario: Frequently asked questions are displayed
        Given I am on the Home page
        Then Frequently asked questions are displayed


