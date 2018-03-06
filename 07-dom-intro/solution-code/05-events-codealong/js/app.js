// create event listener for when the page loads
window.addEventListener('load', function() {
  let mainHeading = document.createElement("h1");
  let headingText = document.createTextNode("Reminders");
  mainHeading.appendChild(headingText); // after this statement, look at elements panel in browser and point out that this is still not part of the DOM
  document.querySelector('header').appendChild(mainHeading);
}, false);

// create references to 3 DOM elements our code will use
const addButton = document.querySelector('#addReminder');
const reminderBox = document.querySelector('#reminder');
const reminderList = document.querySelector('#reminderList');

// create event listener for the submit button
addButton.addEventListener('click', function(event) {
  // prevent the form from being submitted
  event.preventDefault();
  // get the text value the user entered in teh box
  let newReminder = reminderBox.value;
  // create a new list item (li element)
  let reminderItem = document.createElement('li');
  // add the class name used for all list items in this app
  reminderItem.className = 'list-group-item';
  // create a text node consisting of the value the user entered
  let reminderText = document.createTextNode(newReminder);
  // append the text node to the new li element
  reminderItem.appendChild(reminderText);
  // append the li element to the existing list in the DOM
  reminderList.appendChild(reminderItem);
  // reset the value in the text box to an empty string
  reminderBox.value = '';
}, false);