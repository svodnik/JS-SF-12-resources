// Convert favorites list to jQuery:

window.addEventListener('load', function() {
  const button = document.querySelector('#new-thing-button');
  const thingList = document.querySelector('#fav-list');
  const newThingInput = document.querySelector('#new-thing');

  button.addEventListener('click', function(event) {
    event.preventDefault();
    const newThing = newThingInput.value;
    const newThingLi = document.createElement('li');
    const newThingText = document.createTextNode(newThing);
    newThingLi.appendChild(newThingText);
    thingList.appendChild(newThingLi);
    newThingInput.value = '';
  }, false);
}, false);