@portugal
Feature: Verify Rewards History displayed
    Feature a user can see the rewards history including available keys
   
    Scenario: Keys and History are visible
        Given A user is already Logged into rewards page
        Then They can see available keys
        Then They can see the History button
    Scenario: user clicks to see history
        Given User Clicks on the history button
        Then  Keys balance history  is displayed 
        Then Total keys matches total displayed 
