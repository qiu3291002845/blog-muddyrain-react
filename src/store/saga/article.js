import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { ARTICLE_REQUEST_DATA } from "../../Tools/ActionType";
import { BaseUrl } from "../../Tools/Config";
import { ARTICLE_RESPONSE_DATA } from "../../Tools/SagaType";

export const article_request_data = takeEvery(
  ARTICLE_REQUEST_DATA,
  function* () {
    const { data } = yield call(Axios.get, `${BaseUrl}/article`);
    yield put({
      type: ARTICLE_RESPONSE_DATA,
      value: data.data,
    });
  }
);
