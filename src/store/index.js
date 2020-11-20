import { createStore, applyMiddleware } from "redux";

import { defaultReducer } from "./reducer";

import { defaultSaga } from "./saga";

import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
export default createStore(defaultReducer, {}, applyMiddleware(sagaMiddleware));

// 利用   middleware 来 run 一下
sagaMiddleware.run(defaultSaga);
