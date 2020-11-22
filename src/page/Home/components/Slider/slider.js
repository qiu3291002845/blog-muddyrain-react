import React from "react";
import "./slider.min.css";
import { Layout, Menu, Image } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  BookOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { GithubFilled } from "@ant-design/icons";
import Axios from "axios";
import { BaseUrl } from "../../../../Tools/Config";

const { Sider } = Layout;

class Slider extends React.Component {
  state = {
    userInfo: {},
  };
  findUser = async (id) => {
    const { data } = await Axios.get(`${BaseUrl}/user/${id}`);
    console.log(data);
    this.setState({
      userInfo: data.data,
    });
  };
  componentDidMount() {
    if (localStorage.getItem("loginId")) {
      this.findUser(localStorage.getItem("loginId"));
    }
  }

  render() {
    const { userInfo } = this.state;
    const { location } = this.props.history;

    return (
      <div className="sliderContainer">
        <div className="logoBox">
          <GithubFilled />
          {!this.props.home.collapsed ? <span>浊雨不语</span> : null}
        </div>
        <div className="avatarBox d-flex justify-content-start align-items-center">
          <Image width={50} height={50} src={userInfo.user_avatar} />
          {!this.props.home.collapsed ? (
            <div className="info">
              <div className="nickname">{userInfo.user_nickname}</div>
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
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[location.pathname]}
            >
              <Menu.Item key="/home/user" icon={<UserOutlined />}>
                <Link to="/home/user">用户管理</Link>
              </Menu.Item>
              <Menu.Item key="/home/classify" icon={<VideoCameraOutlined />}>
                <Link to="/home/classify">博客分类</Link>
              </Menu.Item>
              <Menu.Item key="/home/label" icon={<BookOutlined />}>
                <Link to="/home/label">博客标签</Link>
              </Menu.Item>
              <Menu.Item key="/home/article" icon={<ReadOutlined />}>
                <Link to="/home/article">博客管理</Link>
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
export default connect(mapStateProps)(withRouter(Slider));
