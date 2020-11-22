import React from "react";
import { connect } from "react-redux";
import MNav from "../../components/MRNav";
import { LABEL_REQUEST_DATA } from "../../Tools/ActionType";
import MTable from "./components/table";
import MEdit from "./components/edit";
class Label extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: LABEL_REQUEST_DATA,
    });
  }
  render() {
    return (
      <>
        <MNav title="标签列表" />
        <MTable />
        {this.props.label.visible ? <MEdit /> : null}
      </>
    );
  }
}
const mapStateProps = (state) => {
  return {
    label: { ...state.label },
  };
};
export default connect(mapStateProps)(Label);
