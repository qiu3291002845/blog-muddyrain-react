import React from "react";
import "./slider.min.css";
import { Layout, Menu, Image } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GithubFilled } from "@ant-design/icons";
const { Sider } = Layout;

class Slider extends React.Component {
  render() {
    return (
      <div className="sliderContainer">
        <div className="logoBox">
          <GithubFilled />
          {!this.props.home.collapsed ? <span>浊雨不语</span> : null}
        </div>
        <div className="avatarBox d-flex justify-content-start align-items-center">
          <Image
            width={50}
            height={50}
            src="https://img.zcool.cn/community/03182da59e13a44a801204463b508bb.jpg@80w_80h_1c_1e_1o_100sh.jpg"
          />
          {!this.props.home.collapsed ? (
            <div className="info">
              <div className="nickname">浊雨不语</div>
              <div className="desc">管理员</div>
            </div>
          ) : null}
        </div>
        <div className="slderContainer">
          <Sider
            className="slderBox"
            trigger={null}
            collapsible
            collapsed={this.props.home.collapsed}
          >
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/">用户管理</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/classify">博客分类</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
            </Menu>
          </Sider>
        </div>
      </div>
    );
  }
}
const mapStateProps = (state) => {
  return {
    home: state.home,
  };
};
export default connect(mapStateProps)(Slider);
