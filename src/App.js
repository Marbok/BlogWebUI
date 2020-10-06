import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TableOfContents from './pages/TableOfContents/TableOfContents';
import Main from './pages/Main';
import Articles from './pages/Articles/Articles';

class App extends React.Component {

  constructor() {
    super();
    this.state = { topics:[] };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route path="/topics" component={ TableOfContents } />
          <Route path="/articles/:idTopic" component={ Articles } />
        </Switch>
      </Router>
    )
  }
}

export default App;
