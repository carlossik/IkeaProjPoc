Feature: Perform health Check in Different Countries
    feature: we need to check the app health every 15 minutes
    Scenario Outline: Conducting a health Check

        Given I login to a market with "<region_Credentials>"
        Then I should see my member details
        And I see my rewards displayed
        Then I should see my keys displayed
        Then my history should be displayed
        Examples:

            | region_Credentials |
            | PT                 |
            | IT                 |
            | AU                 |