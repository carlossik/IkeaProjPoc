

@Regression
Feature:Redeeming a reward

      Scenario Outline: User tries to redeem a reward
            Given I login to a market with "<region_Credentials>"
            When I have enough Keys to redeem a reward
            And I enter redemption page
            When I click on redemption button
            Then  Confirmation screen is displayed


            Examples:

                  | region_Credentials |
                  | AU              |

      Scenario Outline: User tries to use online reward
            Given I login to a market with "<region_Credentials>"
            When I have redeemed a reward
            And I click on use reward button
            Then I should be taken to the redemption page
            And  I should see the Valid until date
            Then I should see voucher code displayed
             When I click on the Copy code button
            Then voucher code is copied  
            Examples:
                  | region_Credentials |
                  | AU                |

        @skip
        Scenario Outline: User tries to use In store reward
            Given I login to a market with "<region_Credentials>"
            When I have redeemed an instore reward
            And I click on use reward button
            Then I should be taken to the redemption page
            And  I should see the Valid until date
            When I click on the view qr code button
            Then I should see QR code displayed
            And family card is displayed
            And Name is displayed on family card
            Examples:
                  | region_Credentials |
                  | AU                |
                 

                 

#using only AU since that is the only account at the moment that has rewards redeemed.



