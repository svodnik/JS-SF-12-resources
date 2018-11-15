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
const textTarget = document.querySelector('#text');
const footerTarget = document.querySelector('#footer');

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

// component for the main page text
function Text(props) {
  return (
    <p>{props.text}</p>
  )
}

// component for the footer menu
function Footer(props) {
  return (
    <nav>
      <ul>
        {props.footer.map(function(item, index) {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </nav>          
  )
}

// the render() method specifies the component, data, and where in the DOM it should be rendered
ReactDOM.render(<Menu {...data} />, menuTarget);
ReactDOM.render(<Heading {...data} />, headingTarget);
ReactDOM.render(<Text {...data} />, textTarget);
ReactDOM.render(<Footer {...data} />, footerTarget);