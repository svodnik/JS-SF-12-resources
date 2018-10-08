// create event listener for when the page loads
$(function() {
  // create references to 3 DOM elements our code will use
  const $addButton = $('#addReminder');
  const $reminderBox = $('#reminder');
  const $reminderList = $('#reminderList');

  // create event listener for the submit button
  $addButton.on('click', function(event) {
    // prevent the button from submitting the form when it's clicked
    event.preventDefault();
    // get the text value the user entered in teh box
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