import React from "react";
import "./index.scss";
import { Image, Form, Input, Button, message } from "antd";
import Axios from "axios";
import { BaseUrl } from "../../Tools/Config";
import { withRouter } from "react-router-dom";
class Login extends React.Component {
  state = {
    loginInfo: {},
  };
  handleChange = async (e) => {
    switch (e.target.name) {
      case "username":
        this.setState({
          loginInfo: {
            ...this.state.loginInfo,
            username: e.target.value,
          },
        });
        break;
      case "password":
        this.setState({
          loginInfo: {
            ...this.state.loginInfo,
            password: e.target.value,
          },
        });
        break;
      default:
        break;
    }
  };
  onFinish = async () => {
    const { data } = await Axios.post(`${BaseUrl}/login`, this.state.loginInfo);
    if (data.statusCode === 200) {
      message.success(data.message);
      this.props.history.push("/home");
      localStorage.setItem("loginId", data.data.user_id);
    } else {
      message.error(data.message);
    }
  };
  render() {
    const { loginInfo } = this.state;
    return (
      <>
        <div className="loginBg">
          <div className="loginBox d-flex justify-content-start align-items-center flex-column">
            <div className="avatar">
              <Image src="https://czh1010.oss-cn-beijing.aliyuncs.com/timg.jpg" />
            </div>
            <Form layout="vertical" onFinish={this.onFinish}>
              <Form.Item label="用户名">
                <Input
                  name="username"
                  placeholder="请输入用户名"
                  value={loginInfo.username}
                  onChange={this.handleChange}
                  allowClear
                ></Input>
              </Form.Item>
              <Form.Item label="密码" className="mb-3">
                <Input.Password
                  name="password"
                  placeholder="请输入密码"
                  value={loginInfo.password}
                  onChange={this.handleChange}
                  allowClear
                  type="password"
                ></Input.Password>
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  className="btn btn-primary btn-block mt-4"
                  style={{ height: "3.05rem" }}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Login);
