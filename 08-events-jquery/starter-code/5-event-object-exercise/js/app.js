// Enhance this code using an event object to prevent the form from submitting
// when the 'Add reminder' button is clicked.

// create event listener for when the page loads
$(function() {
  // create references to 3 DOM elements our code will use
  const $addButton = $('#addReminder');
  const $reminderBox = $('#reminder');
  const $reminderList = $('#reminderList');

  // create event listener for the submit button
  $addButton.on('click', function() {
    // get the text value the user entered in the box
    let newReminder = $reminderBox.val();
    // create a new list item (li element)
    let $reminderItem = $('<li>').text(newReminder);
    // add the class name used for all list items in this app
    $reminderItem.addClass('list-group-item');
    // append the li element to the existing list in the DOM
    $reminderList.append($reminderItem);
    // reset the value in the text box to an empty string
    $reminderBox.val('');
  });
});