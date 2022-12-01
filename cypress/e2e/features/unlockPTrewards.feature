@portugal
Feature: Verify reward amount and Unlock rewards
    Feature a user can unlock rewards when they have enough keys
    Background:
        Given A User has successfully Logged into rewards page
    Scenario: Cake and Coffee for one is selected
        Given They select Cake and Coffee for one and click
        Then Cake and Coffee amount displayed is "25"
    Scenario: Cake and Coffee for two is selected
        When They select Cake and Coffee for two and click
        Then Cake and Coffee amount displayed is "25"
    Scenario: Complete meal for one is selected
        When They select Complete meal for one and click
        Then Complete meal for one amount displayed is ""
    Scenario: Complete meal for two is selected
        When They select Complete meal for two  and click
        Then Complete meal for two amount displayed is ""
    Scenario: voucher for sidewalk  is selected
        When They select voucher for sidewalk  and click
        Then voucher for sidewalk page amount  displayed is ""
    Scenario: voucher for home delivery  is selected
        When They select voucher for home delivery and click
        Then voucher for home delivery amount displayed is 
    Scenario: voucher for sidewalk delivery
        When They select voucher for sidewalk delivery and click
        Then voucher for sidewalk amount  displayed is ""
    Scenario: Ikea product voucher10 is selected
        When They select Ikea product voucher10 and click
        Then Ikea product voucher10 amount displayed is ""
    Scenario: Ikea product voucher15 is selected
        When They select Ikea product voucher15 and click
        Then Ikea product voucher15 amount displayed is ""
    Scenario: Voucher for click and collect at pickup point is selected
        When They select Voucher for click and collect at pickup point and click
        Then Voucher for click and collect at pickup point page amount displayed is ""

