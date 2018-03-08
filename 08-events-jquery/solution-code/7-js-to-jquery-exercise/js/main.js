/*
jQuery: Refactoring a favorites list

Refactor the favorites list to use jQuery selectors and methods.


BONUS 1:
Uncomment the lines of code that alert a user when they submit without typing
anything, and then refactor them using jQuery. 

BONUS 2: Use jQuery to add a "complete task" link at the end of each to-do item
when it is added to the list.

*/

//window.addEventListener('load', function() {
$(function() {
//  const button = document.querySelector('#new-thing-button');
  const $button = $('#new-thing-button');
//  const thingList = document.querySelector('#fav-list');
  const $thingList = $('#fav-list');
//  const newThingInput = document.querySelector('#new-thing');
  const $newThingInput = $('#new-thing');
// BONUS 1:
  //  const errorMsg = document.querySelector('#error-message');
  const $errorMsg = $('#error-message');


//  button.addEventListener('click', function(event) {
  $button.on('click', function(event) {
    event.preventDefault();
//    let newThing = newThingInput.value;
    let $newThing = $newThingInput.val();

    // BONUS 1:
//    if (newThing === '') {
    if ($newThing === '') {
//      errorMsg.className = 'error-text';
      $errorMsg.removeClass('hidden');
      $errorMsg.addClass('error-text');
//      newThingInput.className = 'error';
      $newThingInput.addClass('error');
      return false;
    }

//    let newThingLi = document.createElement('li');
//    let newThingText = document.createTextNode(newThing);
//    newThingLi.appendChild(newThingText);
    let $newThingLi = $('<li>').text($newThing);
//    thingList.appendChild(newThingLi);
    $thingList.append($newThingLi);
//    newThingInput.value = "";
    $newThingInput.val('');
// BONUS 1:
//    errorMsg.className = 'hidden';
    $errorMsg.removeClass('error-text');
    $errorMsg.addClass('hidden');
//    newThingInput.className = '';
    $newThingInput.removeClass('error');
    //  }, false);
  });
//}, false);
});



