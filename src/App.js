import React from 'react';
import TableOfContents from './TableOfContents';

class App extends React.Component {

  constructor() {
    super();
    this.state = { topics:[] };
  }

  componentDidMount() {
    fetch("http://localhost:8080/getTopics")
    .then(responce => responce.json())
    .then(json => this.setState({ topics: json }))
  }

  render() {
    return (
      <TableOfContents topics={ this.state.topics } />
    )
  }
}

export default App;
