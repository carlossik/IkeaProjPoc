Feature: Verify Tokens are correct
    Feature verifying that Tokens are correct
    Background:
        Given A User has  Logged into rewards page
    Scenario:Tokens are displayed
        Then Available tokens for user is displayed
    Scenario:User goes on to the history page
        When user clicks on history button
        Then History page is displayed
        Then tokens displayed add up to total tokens  