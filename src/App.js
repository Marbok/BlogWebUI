import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import TableOfContents from './pages/TableOfContents/TableOfContents';
import Main from './pages/Main';
import Articles from './pages/Articles/Articles';
import Article from './pages/Article/Article';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
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
