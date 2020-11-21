import { TOGGLE_CLASSIFY_EDIT_MODAL } from "../../Tools/ActionType";
import { CLASSIFY_RESPONSE_DATA } from "../../Tools/SagaType";

const initState = {
  dataSource: [],
  visible: false,
};
export const ClassifyReducer = (state = initState, action) => {
  switch (action.type) {
    case CLASSIFY_RESPONSE_DATA:
      return {
        ...state,
        dataSource: action.value.map((item) => {
          return { ...item, key: item.classify_id };
        }),
      };
    case TOGGLE_CLASSIFY_EDIT_MODAL:
      return {
        ...state,
        visible: !state.visible,
      };
    default:
      return Object.assign({}, state, action);
  }
};
