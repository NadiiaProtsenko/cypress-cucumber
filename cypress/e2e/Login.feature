Feature: Testing Login functionality

  Background:
    Given I am on the homepage

  Scenario Outline: Login with different credentials
    When I fill in the login form with "<email>" and "<password>"
    And I click the Login button
    Then I should <login_status>

    Examples:
      | email            | password       | login_status         |
      | guest            | welcome2qauto  | be logged in         |
      |                  |                | see an error message |
      | invalid@email.com| wrongpass      | see an error message |
