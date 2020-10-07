import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TableOfContents from './pages/TableOfContents/TableOfContents';
import Main from './pages/Main';
import Articles from './pages/Articles/Articles';
import Article from './pages/Article/Article';

class App extends React.Component {

  constructor() {
    super();
    this.state = { topics: [] };
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/topics" component={TableOfContents} />
          <Route path="/articles/:idTopic" component={Articles} />
          <Route path="/article/:idArticle" component={Article} />
        </Switch>
      </Router>
    )
  }
}

export default App;
