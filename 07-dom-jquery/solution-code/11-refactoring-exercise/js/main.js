/*
jQuery: Refactoring a favorites list

Refactor the favorites list to use jQuery selectors and methods.


BONUS:
Uncomment the lines of code that alert a user when they submit without typing
anything, and then refactor it using jQuery. 

*/

//window.addEventListener('load', function() {
$(function() {
//  const button = document.querySelector('#new-thing-button');
  const $button = $('#new-thing-button');
//  const thingList = document.querySelector('#fav-list');
  const $thingList = $('#fav-list');
//  const newThingInput = document.querySelector('#new-thing');
  const $newThingInput = $('#new-thing');

//  button.addEventListener('click', function(event) {
  $button.on('click', function(event) {
    event.preventDefault();
//    let newThing = newThingInput.value;
    let $newThing = $newThingInput.val();

   // BONUS:
    if ($newThing === "") {
      alert("You must type in a value!");
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
//  }, false);
  });
//}, false);

});



