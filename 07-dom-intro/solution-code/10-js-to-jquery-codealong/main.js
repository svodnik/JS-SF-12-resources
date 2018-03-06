// Convert favorites list to jQuery:

$(document).ready(function() {
//  const button = document.getElementById('new-thing-button');
  const $button = $('#new-thing-button');
//  const thingList = document.getElementById('fav-list');
  const $thingList = $('#fav-list');
//  const newThingInput = document.getElementById('new-thing');
  const $newThingInput = $('#new-thing');

//  button.onclick = function(event) {
  $button.on('click', function(event) {
    event.preventDefault(); // no change
//    const newThing = newThingInput.value;
    const newThing = $newThingInput.val();
//    const newThingLi = document.createElement('li');
    const $newThingLi = $('<li>');
//    const newThingText = document.createTextNode(newThing);
//    newThingLi.appendChild(newThingText);
    $newThingLi.text(newThing); // combines two JS statements into one!
//    thingList.appendChild(newThingLi);
    $thingList.append($newThingLi);
//    newThingInput.value = "";
    $newThingInput.val('');
//  }
  }); // close parameter list for on() method above
});