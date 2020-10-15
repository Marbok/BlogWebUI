import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from './reducers/authReducer';

export default function (initialState = {}) {
  const rootReducer = combineReducers({
    auth: AuthReducer
  });

  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}