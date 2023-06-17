
Feature: Verify Rewards Displayed For User
       user can see all their rewards
    
    Scenario Outline: Reward Keys are displayed
        Given I login to a market with "<region_Credentials>"
        Then my reward keys should be displayed
        Then the number of rewards displayed are "<rewards>"
        Then total Keys are displayed
        Then History button is displayed
        Then How to collect reward keys is displayed
        Then Frequently asked questions are displayed
         Examples:

            | region_Credentials |rewards|
            | PT                 |9     |
            | IT                 |9      |
            | AU                 |7      |
   

