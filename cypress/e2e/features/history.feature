Feature: Verify Rewards History displayed
    Feature a user can see the rewards history including available keys
    # Background:Given I login to a market with "<region_Credentials>"

    Scenario Outline: Keys and History are visible
        Given I login to a market with "<region_Credentials>"
        Then They can see available keys
        Then They can see the History button
        When User Clicks on the history button
        Then  Keys balance history  is displayed
        Then Total keys matches total displayed
         Examples:

            | region_Credentials |
            | PT                 |
            | IT                 |
            | AU                 |
   


