import { article_request_data } from "./article";
import { classify_find_data } from "./classify";
import { label_find_data } from "./label";
import { user_request_data } from "./user";

export function* defaultSaga() {
  yield user_request_data;
  yield classify_find_data;
  yield label_find_data;
  yield article_request_data;
}
