import React from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";
import { connect } from "react-redux";
import { TOGGLE_COLLAPSED } from "../../../../Tools/ActionType";
import "./header.min.css";
class MHeader extends React.Component {
  toggle = () => {
    this.props.toggleCollapsed();
  };
  render() {
    return (
      <div>
        <Header
          className="headerBox d-flex justify-content-start align-items-center"
          style={{ padding: "0", background: "#5b8cff" }}
        >
          {React.createElement(
            this.props.home.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger mx-3",
              onClick: this.toggle,
            }
          )}
          <span className="title">博客管理系统</span>
        </Header>
      </div>
    );
  }
}
const mapStateProps = (state) => {
  return {
    home: state.home,
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    toggleCollapsed: () => {
      dispatch({
        type: TOGGLE_COLLAPSED,
      });
    },
  };
};
export default connect(mapStateProps, mapDispatchProps)(MHeader);
