import { select, takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";
export function* defaultSaga() {
  yield takeEvery("takeEvery", function* () {
    const user = yield select((state) => state.user);
    const res = yield call(axios.post, "http://127.0.0.1:3300/test", {
      ...user,
    });
    yield put({
      type: "login_success",
      value: res.data,
    });
  });
}
