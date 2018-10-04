/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. 
Review the HTML and CSS code included in the starter code. You will need to write only JavaScript code to complete this exercise.

1) Write down pseudocode for the program described below.

2) Follow the steps in your pseudocode to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the CSS class name to use for the first die, firstDie
* combine 'dice-' and random2 to form the CSS class name to use for the second die, secondDie
* get the first die by ID and update the CSS class name to firstDie 
  (Hint: Use jQuery to reference the element, and use the className property to set the name of the CSS class.)
* get the first die by ID and update the CSS class name to secondDie 
  (Hint: Use jQuery to reference the element, and use the className property to set the name of the CSS class.)

3) Create code that runs the function you created whenever the button with the ID value 'roll-dice' is clicked.
  (Hint: Use jQuery to reference the button, and set an even listener for the click event.)

*/

const $button = $('#roll-dice');
$button.on('click', function() {
  const random1 = Math.floor((Math.random() * 6) + 1);
  const random2 = Math.floor((Math.random() * 6) + 1);
  const firstDie = 'dice-' + random1;
  const secondDie = 'dice-' + random2;
  $('#first-die').addClass(firstDie);
  $('#second-die').addClass(secondDie);
})


