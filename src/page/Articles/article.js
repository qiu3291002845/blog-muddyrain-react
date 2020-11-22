import React from "react";
import { connect } from "react-redux";
import { ARTICLE_REQUEST_DATA } from "../../Tools/ActionType";
import ArticleCard from "./components/card";
class Article extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: ARTICLE_REQUEST_DATA,
    });
  }
  render() {
    const { article } = this.props;

    return (
      <>
        <ArticleCard list={article.dataSource} />
      </>
    );
  }
}
const mapStateProps = (state) => {
  return {
    article: { ...state.article },
  };
};
export default connect(mapStateProps)(Article);
