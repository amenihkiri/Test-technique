import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import InstructorReducer from "../reducers"

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const middleWare = [thunk];


const Store = createStore(
  InstructorReducer,
  composeEnhancers(applyMiddleware(...middleWare))
);
export default Store;