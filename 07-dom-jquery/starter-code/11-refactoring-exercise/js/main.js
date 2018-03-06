/*
jQuery: Refactoring a favorites list

Refactor the favorites list to use jQuery selectors and methods.


BONUS:
Uncomment the lines of code that alert a user when they submit without typing
anything, and then refactor it using jQuery. 

*/

window.addEventListener('load', function() {

  const button = document.querySelector('#new-thing-button');
  const thingList = document.querySelector('#fav-list');
  const newThingInput = document.querySelector('#new-thing');

  button.addEventListener('click', function(event) {
    event.preventDefault();
    let newThing = newThingInput.value;

    // BONUS:
    // if (newThing === "") {
    //   alert("You must type in a value!");
    //   return false;
    // }

    let newThingLi = document.createElement('li');
    let newThingText = document.createTextNode(newThing);
    newThingLi.appendChild(newThingText);
    thingList.appendChild(newThingLi);
    newThingInput.value = "";
  }, false);
}, false);



