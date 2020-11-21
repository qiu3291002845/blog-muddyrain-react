import { classify_find_data } from "./classify";
import { user_request_data } from "./user";

export function* defaultSaga() {
  yield user_request_data;
  yield classify_find_data;
}
