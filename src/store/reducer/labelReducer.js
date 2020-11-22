import { TOGGLE_LABEL_EDIT_MODAL } from "../../Tools/ActionType";
import { LABEL_RESPONSE_DATA } from "../../Tools/SagaType";

const initState = {
  dataSource: [],
  visible: false,
  editId: "",
};
export const LabelReducer = (state = initState, action) => {
  switch (action.type) {
    case LABEL_RESPONSE_DATA:
      return {
        ...state,
        dataSource: action.value.map((item) => {
          return { ...item, key: item.label_id };
        }),
      };
    case TOGGLE_LABEL_EDIT_MODAL:
      return {
        ...state,
        visible: !state.visible,
        editId: action.value,
      };
    default:
      return Object.assign({}, state, action);
  }
};
