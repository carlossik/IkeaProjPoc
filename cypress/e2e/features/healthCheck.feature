Feature: Perform Health Check in regions
    feature :We need to check the state of the app every hour

    Scenario Outline: Scenario Outline name: How To collect Rewards is visible
        Given A user is already Logged in a region
        Then They can see how member card displayed
        Then They can see Their rewards displayed
        Examples:
            | Region | MemberCard Displayed | Rewards Displayed |
            | PT     | True                 | True              |
            | IT     | True                 | True              |
            | AU     | True                 | True              |
