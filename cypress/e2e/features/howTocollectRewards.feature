Feature: Verify How To Collect Rewards
    Feature a user can see how to collect rewards and be able to use slider

    Scenario Outline: how to collect rewards is visible for region

        Given I login to a market with "<region_Credentials>"
        Then I can see how to collect "<rewards>" for market
        Then I can see how to collect rewards slider
        When I slide the slider button
        Then available keys "<keys>" are displayed
        Then available amount "<amount>" is displayed

        Examples:

            | region_Credentials | rewards | keys  | amount |
            | PT                 | 4       | € 520 | 135    |
            | IT                 | 3       | € 520 | 220    |
            | AU                 | 5       | $ 460 | 92     |




