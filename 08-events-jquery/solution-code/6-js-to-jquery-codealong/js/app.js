// Convert the reminders list to use jQuery

// create event listener for when the page loads
//window.addEventListener('load', function() {
$(function() {
//  let mainHeading = document.createElement("h1");
//  let headingText = document.createTextNode("Reminders");
//  mainHeading.appendChild(headingText); 
  let $mainHeading = $('h1').html('Reminders');
//  document.querySelector('header').appendChild(mainHeading);
  $('header').append($mainHeading);
//}, false);
});

// create references to 3 DOM elements our code will use
// const addButton = document.querySelector('#addReminder');
const $addButton = $('#addReminder');
//const reminderBox = document.querySelector('#reminder');
const $reminderBox = $('#reminder');
//const reminderList = document.querySelector('#reminderList');
const $reminderList = $('#reminderList');

// create event listener for the submit button
//addButton.addEventListener('click', function(event) {
$addButton.on('click', function(event) {
  // prevent the form from being submitted
  event.preventDefault();
  // get the text value the user entered in the box
//  let newReminder = reminderBox.value;
  let newReminder = $reminderBox.val();
  // create a new list item (li element)
//  let reminderItem = document.createElement('li');
  let $reminderItem = $('<li>').html(newReminder);
  // add the class name used for all list items in this app
//  reminderItem.className = 'list-group-item';
  $reminderItem.addClass('list-group-item');
  // create a text node consisting of the value the user entered
//  let reminderText = document.createTextNode(newReminder); -- included above
  // append the text node to the new li element
//  reminderItem.appendChild(reminderText); -- included above
  // append the li element to the existing list in the DOM
//  reminderList.appendChild(reminderItem);
  $reminderList.append($reminderItem);
  // reset the value in the text box to an empty string
//  reminderBox.value = '';
  $reminderBox.val('');
//}, false);
});