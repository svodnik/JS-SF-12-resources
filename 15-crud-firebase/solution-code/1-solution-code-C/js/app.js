// Initialize Firebase
const config = {
  apiKey: "AIzaSyCJALvitYbkkEdMEQQrvK4VK5euESAyOwo",
  authDomain: "public-produce.firebaseapp.com",
  databaseURL: "https://public-produce.firebaseio.com",
  storageBucket: "public-produce.appspot.com",
  messagingSenderId: "386298252792"
};
firebase.initializeApp(config);

// https://firebase.google.com/docs/reference/js/firebase.database
const messageAppReference = firebase.database();

$(document).ready(function() {
    $('#message-form').submit(function (event) {
        // by default a form submit reloads the DOM which will subsequently reload all our JS
        // to avoid this we preventDefault()
        event.preventDefault()

        // grab user message input
        const message = $('#message').val()

        // clear message input (for UX purposes)
        $('#message').val('')

        // create a section for messages data in your db
        const messagesReference = messageAppReference.ref('messages');

        // use the push method to save data to the messages
        // https://firebase.google.com/docs/reference/js/firebase.database.Reference#push
        messagesReference.push({
            message: message,
            votes: 0
        });
        console.log(messagesReference);
    });
});


