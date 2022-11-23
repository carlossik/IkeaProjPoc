Feature: Verify CustomerAdmin
Feature a Customer Admin logs into their account
Background:
        Given A Customer admin is logged into their account
    Scenario: Admin is on home page
        Then Welcome Message is displayed
        Then country selection drop down box is Displayed
        Then Search Bar is disoplayed
        Then Search Bar contains customer Free search Options
    Scenario: Admin Searches with email address
        Given Admin searches for customer with email address and country
        Then Then Accounts overview page will be displayed
        Then Profile Menu will be displayed 
        Then Latest transactions will be displayed
    Scenario: Admin Clicks on Rewards in profile page
        Given Admin is in profile page 
        When They select rewards
        Then Rewards page will be displayed
        Then All Rewards valid for that region will be displayed

