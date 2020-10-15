import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import getTopicsReducer from './reducers/getTopicsReducer';

export default function (initialState = {}) {
  const rootReducer = combineReducers({
    auth: authReducer,
    topics: getTopicsReducer
  });

  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}