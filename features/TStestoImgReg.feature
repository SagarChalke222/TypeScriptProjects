Feature: Validate homepage UI

    Scenario Outline: As a user, I can validate home page UI

        Given I am on the login page <homepage>
        Then I can validate the page UI

        Examples:
            | homepage                |
            | https://www.i.europe.food.saveris.net/authenticate/login |
