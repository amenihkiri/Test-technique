// import { createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import InstructorReducer from "../reducers";

// const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// const middleWare = [thunk];

// const Store = createStore(
//   InstructorReducer,
//   composeEnhancers(applyMiddleware(...middleWare))
// );
// export default Store;

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import InstructorReducer from "../reducers/index";
import rootSaga from "../saga/saga";

const sagaMiddleware = createSagaMiddleware();

const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(InstructorReducer, enhancers);
sagaMiddleware.run(rootSaga);
export default store;
