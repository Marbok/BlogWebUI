import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import getTopicsReducer from './reducers/getTopicsReducer';
import getArticlesReducer from './reducers/getArticlesReducer'
import getArticleReducer from './reducers/getArticleReducer'

export default function (initialState = {}) {
  const rootReducer = combineReducers({
    auth: authReducer,
    topics: getTopicsReducer,
    articles: getArticlesReducer,
    article: getArticleReducer
  });

  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}