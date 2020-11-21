import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { CLASSIFY_REQUEST_DATA } from "../../Tools/ActionType";
import { BaseUrl } from "../../Tools/Config";
import { CLASSIFY_RESPONSE_DATA } from "../../Tools/SagaType";

export const classify_find_data = takeEvery(
  CLASSIFY_REQUEST_DATA,
  function* () {
    const { data } = yield call(Axios.get, `${BaseUrl}/classify`);
    yield put({
      type: CLASSIFY_RESPONSE_DATA,
      value: data.data,
    });
  }
);
