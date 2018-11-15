// state represents the data we want to display
// normally, state is a combination of data returned from an HTTP request and user input
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

class User extends React.Component {
  render() {
    return (
      <p className="user">
        {this.props.user}
      </p>
    )
  }
}

// component for the page heading
class Content extends React.Component {
  render() {
    return (
      <p className="content">
        <span className="text">{this.props.text}</span>
        <span className="likes">
          <span className="like">&#10084;</span> {this.props.likes}
        </span>
      </p>
    )
  }
}

// component for the main page text
class Date extends React.Component {
  render() {
    return (
      <p className="date">{this.props.datetime}</p>
    )
  }
}

class App extends React.Component {
  items = this.props.articles.map(function(item, index) {
    return (
      <article key={index}>
        <User user={item.user} />
        <Content text={item.text} likes={item.likes} />
        <Date datetime={item.datetime} />
      </article>
    )
  })

  render() {
    return (
      <div>
        {this.items}
      </div>
    )
  }
}

// the render() method specifies the component, data, and where in the DOM it should be rendered
ReactDOM.render(<App {...data} />, root);