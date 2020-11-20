import React from "react";
import "./searchBox.min.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
class Search extends React.Component {
  render() {
    const { title, onSearch, onEnter, allowClear } = this.props;
    return (
      <div className="searchBox d-flex justify-content-between align-items-center">
        <div className="title">{title}</div>
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
      </div>
    );
  }
}
Search.propTypes = {
  onSearch: PropTypes.func,
  onEnter: PropTypes.func,
  title: PropTypes.string,
  allowClear: PropTypes.bool,
};
export default Search;
