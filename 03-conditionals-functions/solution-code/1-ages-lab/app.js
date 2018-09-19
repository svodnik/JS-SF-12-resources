/*
    When programming user interfaces, you will often need to display results based on a certain input. In this exercise, you will design a program that will let users know what legal privileges people in the U.S. enjoy based on their age.

    Write a program that outputs results based on users’ age. This exercise draws on if/else statements, Boolean logic, and comparison operators. 
    See the conditions below:

    - If you are under 16, you cannot do much outside of going to school
    - If you are 16 or older, you can drive
    - If you 18 or older, you can vote
    - If you are 21 or older, you can drink alcohol
    - If you are 25 or older, you can rent a car
    - If you are 35 or older, you can run for president
    - If you are 62 or older, you collect social security benefits

    The results that your program provides should be only the most recent privilege based on the provided age.

    BONUS 1: Rewrite your code to allow a user to enter an age value, rather than hard-coding it into your program. (Hint: Read up on the window.prompt method at https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt.)

    BONUS 2: Rewrite your code to use a switch statement rather than if and else statements. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
*/

"use strict";

let age = 25;

if (age < 16) {
  console.log('You can go to school!')
} else if (age >= 16 && age < 18) {
  console.log('You can drive!');
} else if (age >= 18 && age < 21) {
  console.log('You can vote!');
} else if (age >= 21 && age < 25) {
  console.log('You can drink alcohol!');
} else if (age >= 25 && age < 35) {
  console.log('You can rent a car!');
} else if (age >= 35 && age < 62) {
  console.log('You can run for president!');
} else if (age >= 62) {
  console.log('You can collect social security!');
} else {
  console.log('Please enter a correct age value');
}
