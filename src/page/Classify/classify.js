import React from "react";
import { connect } from "react-redux";
import MNav from "../../components/MRNav";
import { CLASSIFY_REQUEST_DATA } from "../../Tools/ActionType";
import MTable from "./components/table";
import MEdit from "./components/edit";
class Classify extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: CLASSIFY_REQUEST_DATA,
    });
  }
  render() {
    return (
      <>
        <MNav title="分类列表" />
        <MTable />
        <MEdit />
      </>
    );
  }
}
export default connect()(Classify);
