import { USER_ENTER_SEARCH, USER_INPUT_SEARCH } from "../../Tools/ActionType";
import {
  USER_RESPONSE_DATA,
} from "../../Tools/SagaType";

const initState = {
  dataSource: [],
  searchSource: [],
  userInfo: {},
};

export const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_RESPONSE_DATA:
      return {
        ...state,
        searchSource: action.value.map((item) => {
          return { ...item, key: item.user_id };
        }),
        dataSource: action.value.map((item) => {
          return { ...item, key: item.user_id };
        }),
      };
    case USER_ENTER_SEARCH:
      const newData = state.searchSource.filter((item) => {
        return (
          item.user_nickname.toLocaleLowerCase().indexOf(action.value) !== -1
        );
      });
      return { ...state, dataSource: newData };
    case USER_INPUT_SEARCH:
      return { ...state, dataSource: state.searchSource };
    default:
      return Object.assign({}, state, action);
  }
};
