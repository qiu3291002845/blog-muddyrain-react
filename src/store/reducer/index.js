export const defaultReducer = (state, action) => {
  switch (action.type) {
    case "login_success":
      console.log(action);
      return {};

    default:
      return Object.assign({}, state, action);
  }
};
