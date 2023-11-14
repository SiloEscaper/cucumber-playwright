@SapFioneer
Feature: SAP Fioneer Challenge

  Background: Navigation
    Given the user is at the base page

  @Bookmarks
  Scenario: Bookmarks
     Then the bookmarks are visible and have following content on the page

  @FinancialControl
  Scenario: Financial Control page
    When the user selects Financial Control inside Finance & ESG bookmark
    Then the user is on Financial Control page

  @GetInTouch
  Scenario: Get In Touch
    When the user clicks on 'Get in touch' button
    Then the user is on Get in touch page
    When the user clicks on 'Submit' button on empty contact
    Then validation messages are displayed correctly on the page
