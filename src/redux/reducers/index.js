import { combineReducers } from 'redux';
import authReducer from './authReducer';
import getTopicsReducer from './getTopicsReducer';
import getArticlesReducer from './getArticlesReducer';
import getArticleReducer from './getArticleReducer';
import saveArticleReducer from './saveArticleReducer';


export default combineReducers({
    auth: authReducer,
    topics: getTopicsReducer,
    articles: getArticlesReducer,
    article: getArticleReducer,
    saveArticle: saveArticleReducer
});

