@italy
Feature: Verify ITRewards Displayed For User
Feature a user can see all their rewards
Background:
        Given A ITUser is already Logged into rewards page
    Scenario: Reward Keys are displayed
        Then my ITreward keys should be displayed
        Then the number of ITrewards displayed are 10
        Then total ITKeys are displayed
        Then ITHistory button is displayed
    Scenario: Projects are Displayed
        Then my ITprojects will be displayed
        Then Total number of ITprojects displayed is 4
    Scenario: How to collect reward Keys is Visible to user
        Then How to collect reward keysIT is displayed
    Scenario: Frequently asked questions are displayed
        Then Frequently asked questionsIT are displayed
