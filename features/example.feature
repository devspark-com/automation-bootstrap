Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  to run my E2E tests

  @dev
  Scenario: Wrapping WebDriver
    Given I go on "http://juliemr.github.io/protractor-demo/"
    Then the title should equal "Super Calculator"
