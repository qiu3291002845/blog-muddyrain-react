import { TOGGLE_COLLAPSED } from "../../Tools/ActionType";

const initState = {
  collapsed: false,
};
export const HomeReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_COLLAPSED:
      return { ...state, collapsed: !state.collapsed };

    default:
      return Object.assign({}, state, action);
  }
};
