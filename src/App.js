import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

import Topics from './pages/Topics/Topics';
import Main from './pages/Main';
import Articles from './pages/Articles/Articles';
import Article from './pages/Article/Article';
import Navigation from './components/Navigation';
import SignIn from './pages/Auth/SignIn';
import Registration from './pages/Auth/Registration';
//import DevTools from './components/DevTools';

class App extends React.Component {

  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Router>
       {/*   <DevTools store={store} /> */}
          <Navigation />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/topics" component={Topics} />
            <Route path="/articles/:idTopic" component={Articles} />
            <Route path="/article/:idArticle" component={Article} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={Registration} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
