Feature: Drill into Rewards pages

    Background: User is Logged in and on rewards page

    Scenario Outline: Scenario Outline name: User selects any reward displayed
        Given I am on the home page
        And rewards grid is enabled
        When I click on any <Reward>
        Then the <Reward_Availability> button will be displayed
        Then  <Number Of Keys>  for the reward is displayed
        Then <Terms_of_use> of use is displayed
        Examples:
            | Reward                                 | Reward_Availability | Number Of Keys | Terms_of_use |
            | Cake & hot drink for one               | Available           | True           | True         |
            | €4voucherforparceldeliveryorcollection | Not Enought Keys    | False          | True         |

