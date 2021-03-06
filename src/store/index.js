import { createStore, applyMiddleware, combineReducers } from "redux";
import {
  HomeReducer,
  UserReducer,
  GlobalReducer,
  ClassifyReducer,
  LabelReducer,
  ArticleReducer,
} from "./reducer";
import { defaultSaga } from "./saga";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

export default createStore(
  combineReducers({
    home: HomeReducer,
    user: UserReducer,
    global: GlobalReducer,
    classify: ClassifyReducer,
    label: LabelReducer,
    article: ArticleReducer,
  }),
  {},
  applyMiddleware(sagaMiddleware)
);

// 利用   middleware 来 run 一下
sagaMiddleware.run(defaultSaga);
