Feature: Verify Rewards Displayed For User

Scenario Outline: verifying rewards

        Given I login to a market with "<region_Credentials>"
        When I select "<reward>"
        Then "<amount>" is displayed
        Examples:

            | region_Credentials | 
            | PT                 | 
            | IT                 | 
            | AU                 | 


