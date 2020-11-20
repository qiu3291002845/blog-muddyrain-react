import { createStore, applyMiddleware, combineReducers } from "redux";
import { HomeReducer, UserReducer } from "./reducer";
import { defaultSaga } from "./saga";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

export default createStore(
  combineReducers({
    home: HomeReducer,
    user: UserReducer,
  }),
  {},
  applyMiddleware(sagaMiddleware)
);

// 利用   middleware 来 run 一下
sagaMiddleware.run(defaultSaga);
