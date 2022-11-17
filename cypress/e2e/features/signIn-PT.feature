Feature: Sign in

  Background: Navigate to the Sign in Page

  Scenario:  using email address and Passwrd
  Given open the Ikea page
    When enter my username
    When enter my password
    When click on continue button
    Then User should be logged into account 

  