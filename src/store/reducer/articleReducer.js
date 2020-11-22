import { ARTICLE_RESPONSE_DATA } from "../../Tools/SagaType";
const initState = {
  dataSource: [],
  visible: false,
};
export const ArticleReducer = (state = initState, action) => {
  switch (action.type) {
    case ARTICLE_RESPONSE_DATA:
      return {
        ...state,
        dataSource: action.value.map((item) => {
          return { ...item, key: item.article_id };
        }),
      };

    default:
      return state;
  }
};
