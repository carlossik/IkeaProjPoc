
Feature: Verify Rewards Displayed For User
    Feature a user can see all rewards for specific market
     Scenario Outline: Reward pages are displayed
        Given I login to a market with "<region_Credentials>"
        Then rewards for "<region_Credentials>" are displayed

         Examples:

            | region_Credentials |
            | PT                 |
            | IT                 |
            | AU                 |
   
    
        