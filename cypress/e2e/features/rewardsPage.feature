Feature: Verify Rewards Displayed For User

Scenario Outline: verifying rewards

        Given I login to a market with "<region_Credentials>"
        Examples:

            | region_Credentials |
            | PT                 |
            | IT                 |
            | AU                 |

        When I select "<reward>"
        Examples:
            | reward |
            |'[data-testid="reward-4914"] > .rewards__rewards__inner'|
            |        |
            |        |
            |        |

        Then "<amount>" is displayed
        Examples:

            | Amount |
            |        |
            |        |
            |        |
            |        |



