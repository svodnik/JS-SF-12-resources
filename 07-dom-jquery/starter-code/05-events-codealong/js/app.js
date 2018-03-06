let mainHeading = document.createElement("h1");
let headingText = document.createTextNode("Reminders");
mainHeading.appendChild(headingText); // after this statement, look at elements panel in browser and point out that this is still not part of the DOM
document.querySelector('header').appendChild(mainHeading);

