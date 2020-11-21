import React from "react";
import "./mrNav.min.css";
import { Input } from "antd";
import { SearchOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
class MrNav extends React.Component {
  backTo = () => {
    this.props.history.go(-1);
  };
  render() {
    const {
      title,
      onSearch,
      onEnter,
      allowClear,
      showSearchInput,
      showBack,
    } = this.props;
    return (
      <div className="searchBox d-flex justify-content-between align-items-center">
        <div className="title d-flex justify-content-center align-items-center">
          {showBack ? (
            <ArrowLeftOutlined onClick={this.backTo} className="mr-2" />
          ) : null}
          {title}
        </div>
        {showSearchInput ? (
          <Input
            suffix={<SearchOutlined />}
            placeholder="请输入搜索关键字"
            className="searchInput"
            allowClear={allowClear}
            onInput={(e) => {
              return onSearch ? onSearch(e.target.value) : null;
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                return onEnter ? onEnter(e.target.value) : null;
              }
            }}
          />
        ) : null}
      </div>
    );
  }
}
MrNav.propTypes = {
  onSearch: PropTypes.func,
  onEnter: PropTypes.func,
  title: PropTypes.string.isRequired,
  allowClear: PropTypes.bool,
  showSearchInput: PropTypes.bool,
  showBack: PropTypes.bool,
};
export default withRouter(MrNav);
