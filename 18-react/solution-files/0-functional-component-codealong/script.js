// the data we want to display
// normally, data is a combination of data returned from an HTTP request and user input
let data = {
  title: 'All About React',
  menu: ['Home', 'Components', 'JSX'],
}

// references to the elements that will display the results of our React components
const menuTarget = document.querySelector('#menu');
const headingTarget = document.querySelector('#heading');

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

function Heading(props) {
  return (
    <nav>
      <h1>{props.title}</h1>
    </nav>
  )          
}

// the render() method specifies the component, data, and where in the DOM it should be rendered
ReactDOM.render(<Menu {...data} />, menuTarget);
ReactDOM.render(<Heading {...data} />, headingTarget);