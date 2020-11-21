import React from "react";
import { connect } from "react-redux";
import { USER_REQUEST_DATA } from "../../Tools/ActionType";
import { UserTable } from "./components";
import MrNav from "../../components/MRNav";
import { USER_ENTER_SEARCH, USER_INPUT_SEARCH } from "../../Tools/ActionType";
class User extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: USER_REQUEST_DATA,
    });
  }
  searchEnterUser = (e) => {
    this.props.dispatch({
      type: USER_ENTER_SEARCH,
      value: e,
    });
  };
  searchInputUser = (e) => {
    if (e === "") {
      this.props.dispatch({
        type: USER_INPUT_SEARCH,
        value: e,
      });
    }
  };
  render() {
    return (
      <div>
        <MrNav
          title="用户列表"
          onEnter={this.searchEnterUser}
          onSearch={this.searchInputUser}
          allowClear
          showSearchInput
        />
        <UserTable />
      </div>
    );
  }
}
export default connect()(User);
