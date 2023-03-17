Feature: Granting Goodwill Keys to user in region
    feature: A coworker wants to grant good will keys 
    Scenario Outline: Granting goodwill keys in region

        Given A coworker logs into a "<Region>" 
        When "<Region>"  has the over ride function
        And goodwill keys needs to be granted
        Then They should see override button
        When override button is clicked
        Then override field is displayed
        Examples:

            | Region |
            | PT     |
            | IT     |
            | AU     |