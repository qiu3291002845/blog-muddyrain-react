import { call, put, takeEvery } from "redux-saga/effects";
import {
  USER_REQUEST_DATA
} from "../../Tools/ActionType";
import axios from "axios";
import { BaseUrl } from "../../Tools/Config";
import {
  USER_RESPONSE_DATA,
} from "../../Tools/SagaType";
export const user_request_data = takeEvery(USER_REQUEST_DATA, function* () {
  const { data } = yield call(axios.get, `${BaseUrl}/user`);
  yield put({
    type: USER_RESPONSE_DATA,
    value: data.data,
  });
});
