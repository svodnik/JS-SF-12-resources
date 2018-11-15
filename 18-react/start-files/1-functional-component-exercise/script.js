// the data we want to display
// normally, data is a combination of data returned from an HTTP request and user input
let data = {
  title: 'All About React',
  menu: ['Home', 'Components', 'JSX'],
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse elementum mi in nisl imperdiet, nec sagittis ipsum pulvinar. Suspendisse dapibus dictum nisi, ut malesuada nisi fermentum eget. Cras porttitor, sapien nec tempor lacinia, quam dolor hendrerit nunc, at rhoncus turpis quam non risus. Mauris euismod porta nulla non tincidunt. Vivamus eget purus a magna iaculis imperdiet. Morbi maximus tortor sit amet fringilla lobortis. Fusce nec magna ligula. Mauris massa risus, imperdiet nec mattis eget, porttitor at augue. Integer quis dignissim nisi. Etiam finibus, metus vitae molestie sodales, sem tortor luctus justo, sit amet efficitur sem erat eget tellus. Phasellus cursus et lorem eget venenatis. Vivamus id turpis eu nunc suscipit congue nec faucibus sapien. Duis tristique dolor turpis, vitae condimentum mauris tempus vel. Aliquam urna urna, ornare eu purus laoreet, feugiat accumsan nunc.',
  footer: ['Terms of use', 'Support', 'Contact', 'Copyright']
}

// references to the elements that will display the results of our React components
const menuTarget = document.querySelector('#menu');
const headingTarget = document.querySelector('#heading');
// STEP 1
// Create new variables to store references to the elements with the id values 
// 'text' and 'footer'



// component for the menu at the top of the page
function Menu(props) {
  return (
    <nav>
      <ul>
        {props.menu.map(function(item, index) {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </nav>
  )
}

// component for the page heading
function Heading(props) {
  return (
    <nav>
      <h1>{props.title}</h1>
    </nav>
  )
}

// STEP 2
// Create a component function called Text to display the value of the 'text'
// property from our 'data' object within a <div> element.



// STEP 3
// Create a component function called Footer to display the items from the 
// 'footer' property from our 'data' object within a <nav> element.
// HINT: Use the same JSX structure that you used for the Menu function above.



// the render() method specifies the component, data, and where in the DOM it should be rendered
ReactDOM.render(<Menu {...data} />, menuTarget);
ReactDOM.render(<Heading {...data} />, headingTarget);

// STEP 4
// Add statements to render the Text and Footer components, specifying the
// target node for each using the variables you defined in Step 1.




// STEP 5
// Save your work, open this app in a browser using your HTTP server, and
// verify that all the content is displayed as expected.

// BONUS
// Add another property to the 'data' variable above, then build and render
// a component that uses that data.