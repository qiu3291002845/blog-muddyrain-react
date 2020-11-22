import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { LABEL_REQUEST_DATA } from "../../Tools/ActionType";
import { BaseUrl } from "../../Tools/Config";
import { LABEL_RESPONSE_DATA } from "../../Tools/SagaType";

export const label_find_data = takeEvery(LABEL_REQUEST_DATA, function* () {
  const { data } = yield call(Axios.get, `${BaseUrl}/label`);
  yield put({
    type: LABEL_RESPONSE_DATA,
    value: data.data,
  });
});
