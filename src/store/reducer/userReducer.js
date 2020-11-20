import { USER_RESPONSE_DATA } from "../../Tools/SagaType";

const initState = {
  dataSource: [],
};

export const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case USER_RESPONSE_DATA:
      return {
        ...state,
        dataSource: action.value.map((item) => {
          return { ...item, key: item.user_id };
        }),
      };
    default:
      return Object.assign({}, state, action);
  }
};
