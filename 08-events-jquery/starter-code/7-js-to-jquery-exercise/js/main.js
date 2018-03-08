/*
jQuery: Refactoring a favorites list

Refactor the favorites list to use jQuery selectors and methods.

BONUS 1:
Uncomment the lines of code that alert a user when they submit without typing
anything, and then refactor them using jQuery. 

BONUS 2: Use jQuery to add a "complete task" link at the end of each to-do item
when it is added to the list.

*/

window.addEventListener('load', function() {
  const button = document.querySelector('#new-thing-button');
  const thingList = document.querySelector('#fav-list');
  const newThingInput = document.querySelector('#new-thing');
  // BONUS 1:
  // const errorMsg = document.querySelector('#error-message');

  button.addEventListener('click', function(event) {
    event.preventDefault();
    const newThing = newThingInput.value;

    // BONUS 1:
    // if (newThing === '') {
    //   errorMsg.className = 'error-text';
    //   newThingInput.className = 'error';
    //   return false;
    // }

    const newThingLi = document.createElement('li');
    const newThingText = document.createTextNode(newThing);
    newThingLi.appendChild(newThingText);
    thingList.appendChild(newThingLi);
    newThingInput.value = '';
    // BONUS 1:
    // newThingInput.className = '';
    // errorMsg.className = 'hidden';
  }, false);
}, false);