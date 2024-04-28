Feature: Testing HomePage

  Scenario: Verify presence of social media icons
    Given I am on the homepage
    Then I should see 5 social media icons

  Scenario: Verify Sign Up form opens
    Given I am on the homepage
    When I click on the Sign Up button
    Then I should see the registration form

  Scenario: Verify Sign In form opens
    Given I am on the homepage
    When I click on the Sign In button
    Then I should see the login form
