// Customizable to do list

// You're creating a to do list with a form for user input and a button for
// adding the new item to the list.
// Complete the following steps to make the button work:

// 1. Create an event listener for when the page loads. All your code for the
//    project should go here.
// 2. Create 3 variables, each using jQuery to store a reference to one of the
//    following DOM elements:
//    a. the button element, which has the ID value addReminder
//    b. the text box, which has the ID value reminder
//    c. the reminder unordered list, which has the ID value reminderList
// 3. Create an event listener on the button element that responds to the 
//    click event. The code for this event listener should do the following:
//    a. Get the text a user entered in the text box and store that value in 
//       a variable.
//    b. Create a new li element containing the text entered by the user.
//    c. Add the class list-group-item to the new li element.
//    d. Append the new li element to the unordered list.
//    e. Reset the value in the text box to an empty string.
// 4. Save and test your work.

// create event listener for when the page loads
$(function() {
  // create references to 3 DOM elements our code will use
  const $addButton = $('#addReminder');
  const $reminderBox = $('#reminder');
  const $reminderList = $('#reminderList');

  // create event listener for the submit button
  $addButton.on('click', function() {
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