# Leap Year

According to [Wikipedia](https://en.wikipedia.org/wiki/Leap_year), a leap year is a year with an extra day (February 29).  It has 366 days instead of 365 days.  These extra days occur when the year is divisible by 4 (except for years divisible by 100, but not by 400).  For example, 2020 is a leap year, but 1900 is not a leap year.  The aim is to implement this using HTML Forms and JavaScript.

## UX

**Getting Started**

In the input field, enter the year between 1600 and 9999 (e.g. 2020) as a whole number.  Then click on the Submit Button.  You will see the year you have entered and see if the entered year is a leap year, unless you have made an invalid input.  Click on the Reset Button to clear the information or start again.

**User Stories**

As a user, I expect to get an invalid input error message if I do any or all of:

    * Not enter anything in the input field
    * Entering a number less than 1600 or greater than 9999
    * Entering a number, but it is not an integer
    * Entering anything other than a number (e.g. text such as bus)

As a user, providing my input is valid, I expect to see something like:

    You have entered the Year 2020.
    2020 is a Leap Year.

As a user, if I click on the Reset Button, I expect the information to be cleared or I can start again.

**Information Architecture**

Year is an integer between 1600 and 9999.  The function `isLeapYear(year)` returns `true` or `false`.

## Features

Allows the user to enter a number (the year) as well as seeing it that year is a leap year.  Performs checks on valid input.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.1.3 and Google Fonts.

## Testing

Ensure all the user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/leap-year) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Wikipedia](https://en.wikipedia.org/wiki/Main_Page)
- [FreeCodeCamp](https://www.freecodecamp.org)