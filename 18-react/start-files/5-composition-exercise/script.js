let data = {
  articles: [
    {
      user: 'sallysassalot',
      text: 'I saw a turtle!',
      likes: 42,
      datetime: 'Dec 17, 2020, 3:24am'
    },
    {
      user: 'Alexander Windowblinds',
      text: 'What can be seen can also be not seen',
      likes: 0,
      datetime: 'Apr 16, 2023, 05:18am'
    },
    {
      user: 'terrible youse',
      text: 'Pizza Rat is at it again',
      likes: 583,
      datetime: 'Jan 13, 2022, 6:16pm'
    }
  ]
}

const root = document.querySelector('#main');

// STEP 1
// Create a User component that returns the following:
// - a p element
// - with the class value "user"
// - displaying the value of the "user" prop





// STEP 2
// Create a Content component that returns the following:
// - a p element with the class value "content"
// - within the p element:
//   - a span element with the class value "text" that displays the value of
//     the "text" prop
//   - a span element with the class value "likes" that has the following children:
//     - a span element with the class value "like" and the content &#10084;
//     - the value of the "likes" prop





// STEP 3
// Create a Date component that returns the following:
// - a p element
// - with the class value "date"
// - displaying the value of the "datetime" prop




// STEP 4
// Create an App component with the following functionality:
// 1. An "items" variable that 
//    - runs the map method on the "articles" prop
//    - returns 
//      - an article element with a key attribute equal to the index value from 
//        the map method
//      - within the article element, call the following:
//        - the User component, specifying a "user" prop with a value of "item.user"
//        - the Content component, specifying 
//          - a "text" prop with a value of "item.text"
//          - a "likes" prop with a value of "item.likes"
//        - the Date component, specifying a "datetime" prop with a value of "item.datetime"
// 2. A render call that returns the following:
//    - a div element
//    - containing the value of the "items" variable




// STEP 5
// Call ReactDOM.render on the App component, passing in the data variable
// using the spread operator, and specifying the "root" variable as the
// insertion point in the DOM.




// STEP 6
// Save your work, open index.html using your HTTP server, and verify that all
// the data from the "data" variable is displayed.