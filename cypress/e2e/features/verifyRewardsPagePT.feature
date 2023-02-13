@portugal
Feature: Verify Rewards Displayed For User
    Feature a user can drill into all their rewards
    Background:
        Given A User has successfully Logged into rewards page
    Scenario: Cake and hot drink for one is selected
        Given  Cake and hot drink for one is selected and clicked
        Then Cake and hot drink for one page is displayed
    # Scenario: Cake and hot drink for two is selected
    #     When They select Cake and hot drink for two and click
    #     Then Cake and hot drink for two page is displayed
    Scenario: Complete meal for one is selected
        When They select Complete meal for one and click
        Then Complete meal for one page is displayed
    Scenario: Complete meal for two is selected
        When They select Complete meal for two  and click
        Then Complete meal for two page is displayed
    Scenario: voucher for sidewalk  is selected
        When They select voucher for sidewalk  and click
        Then voucher for sidewalk page is displayed
    Scenario: voucher for home delivery  is selected
        When They select voucher for home delivery and click
        Then voucher for home delivery page is displayed
    Scenario: voucher for sidewalk delivery
        When They select voucher for sidewalk delivery and click
        Then voucher for sidewalk delivery page is displayed
    Scenario: Ikea product voucher10 is selected
        When They select Ikea product voucher10 and click
        Then Ikea product voucher10 page is displayed
    Scenario: Ikea product voucher15 is selected
        When They select Ikea product voucher15 and click
        Then Ikea product voucher15 page is displayed
    Scenario: Voucher for click and collect at pickup point is selected
        When They select Voucher for click and collect at pickup point and click
        Then Voucher for click and collect at pickup point page is displayed

