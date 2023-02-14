@portugal
Feature: Verify Rewards Displayed For User
Feature a user can see all their rewards
Background:
        Given A User is already Logged into rewards page
    Scenario: Reward Keys are displayed
        Then my reward keys should be displayed
        Then the number of rewards displayed are 10
        Then total Keys are displayed
        Then History button is displayed
    Scenario: How to collect reward Keys is Visible to user
        Then How to collect reward keys is displayed
    Scenario: Frequently asked questions are displayed
        Then Frequently asked questions are displayed
