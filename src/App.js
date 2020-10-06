import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TableOfContents from './pages/TableOfContents/TableOfContents';
import Main from './pages/Main';

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
      <Router>
        <Switch>
          <Route path="/topics" component={ TableOfContents } />
          <Route path="/" component={ Main } />
        </Switch>
      </Router>
    )
  }
}

export default App;
