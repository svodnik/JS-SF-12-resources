// create references to 3 DOM elements our code will use
const $addButton = $('#addReminder');
const $reminderBox = $('#reminder');
const $reminderList = $('#reminderList');

// wait until DOM has finished loading before running code
$(function() {
  // set event listener for click event on $addButton element
  $addButton.on('click', function(event) {
    // keep the default action from happening when button is clicked
    event.preventDefault();
    // store the user entered text value from the $reminderBox text box
    let newReminder = $reminderBox.val();
    // create a new list item
    let $reminderItem = $('<li>');
    // add a class value to the new list item
    $reminderItem.addClass('list-group-item');
    // add the user entered text as the content of the new list item
    $reminderItem.text(newReminder);
    // append the new list item to the unordered list
    $reminderList.append($reminderItem);
    // remove the user entered text from the text box
    $reminderBox.val('');
  });
});