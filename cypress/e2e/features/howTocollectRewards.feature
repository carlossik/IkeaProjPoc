Feature: Verify How To Collect Rewards
    Feature a user can see how to collect rewards and be able to use slider
    
    Scenario: How To collect Rewards is visible
        Given A user is already Logged in
        Then They can see how to collect rewards
        Then They can see how to collect rewards slider
    
    Scenario: user slides to see rewards available
        Given User slides the slider button
        Then  availabe rewards  is displayed
        