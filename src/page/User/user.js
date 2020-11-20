import React from "react";
import { connect } from "react-redux";
import { USER_REQUEST_DATA } from "../../Tools/ActionType";
import { UserTable } from "./components";
import Search from "../../components/Search/";
class User extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: USER_REQUEST_DATA,
    });
  }
  render() {
    return (
      <div>
        <Search
          title="用户列表"
        
        />
        <UserTable />
      </div>
    );
  }
}
export default connect()(User);
