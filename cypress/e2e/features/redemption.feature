 
 Feature:Redeeming a reward
 
  Scenario Outline: User tries to redeem a reward
        Given I login to a market with "<region_Credentials>"
        When I have enough Keys to redeem a reward
        And I enter redemption page
        When I click on redemption button 
        Then  Confirmation screen is displayed
        When I confirm redemption
        Then reward is redeemed

         Examples:

            | region_Credentials |
            | PT                 |
            | IT                 |
            | AU                 |
   
   Scenario Outline: User tries to use reward
   Given I have redeemed a reward
   When I click on use reward button
   Then I should be taken to the redemption page
   And  I should see the Vlid until date
   When I click on the view qr code button
   Then I should see QR code displayed
   And family card is displayed
   And Name is displayed on family card


 