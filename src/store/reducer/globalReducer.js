const initState = {
  isLoading: false,
};

export const GlobalReducer = (state = initState, action) => {
  return Object.assign({}, state, action);
};
