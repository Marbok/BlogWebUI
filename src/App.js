import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import Topics from './pages/Topics/Topics';
import Main from './pages/Main';
import ArticlesByTopic from './pages/Articles/ArticlesByTopic';
import Article from './pages/Article/Article';
import Navigation from './components/Navigation';
import SignIn from './pages/Auth/SignIn';
import Registration from './pages/Auth/Registration';
import NewArticleForm from './pages/ArticleForm/NewArticleForm';
import MyArticles from './pages/Articles/MyArticles';

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/topics" component={Topics} />
            <Route path="/myArticles" component={MyArticles} />
            <Route path="/articles/:idTopic" component={ArticlesByTopic} />
            <Route path="/article/:idArticle" component={Article} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={Registration} />
            <Route path="/createArticle" component={NewArticleForm} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
