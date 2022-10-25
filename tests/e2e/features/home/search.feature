Feature: search
  As a user
  I want to search for a specific item
  So that I can find it easily

  Scenario: search with no results
    Given user has browsed to the homepage
    When user searches for "foobar" using the WebUI
    Then user should see the following message
      """
      Sorry, no results found for "new"
      """
