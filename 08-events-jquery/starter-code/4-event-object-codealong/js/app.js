/*

Add event listeners to the 3 buttons at the top of the page.
Clicking each button should hide the block below it with the corresponding color.

*/

// STEP 1
// After the variable declarations below, write statements setting the value of each variable to reference one of the three buttons at the top of the page.
// (HINT: The buttons are p elements with the id values r, b, and y.)

let $redBtn;
let $blueBtn;
let $yellowBtn;

$redBtn = $('#r');
$blueBtn = $('#b');
$yellowBtn = $('#y');

// STEP 2
// After the variable declarations below, write statements setting the value of each variable to reference one of the three blocks in the middle of the page.
// (HINT: The blocks are div elements with the class values red, blue, and yellow.)

let $redBlock;
let $blueBlock;
let $yellowBlock;

$redBlock = $('.red');
$blueBlock = $('.blue');
$yellowBlock = $('.yellow');

// STEP 3
// Write a statement to add an event listener to the $redBtn element. In response to the click event, it should add the class name 'hidden' to the $redBlock element.

$redBtn.on('click', function() {
    $redBlock.addClass('hidden');
});

// STEP 4
// Write a statement to add an event listener to the $blueBtn element. In response to the click event, it should add the class name 'hidden' to the $blueBlock element.

$blueBtn.on('click', function() {
    $blueBlock.addClass('hidden');
});

// STEP 5
// Write a statement to add an event listener to the $yellowBtn element. In response to the click event, it should add the class name 'hidden' to the $yellowBlock element.

$yellowBtn.on('click', function() {
    $yellowBlock.addClass('hidden');
});

// STEP 6
// Save your changes, open index.html in your browser, and test each of the buttons.


// BONUS
// Add an event listener for the "Show all blocks" button that removes the hidden class from all the colored block elements.
// (HINT: Look up the jQuery each() method.)

let $showAll = $('#show');
let $blocks = $('section');
$showAll.on('click', function() {
  $blocks.each(function() {
    $(this).removeClass('hidden');
  });
});