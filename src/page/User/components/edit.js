import React from "react";
import MrNav from "../../../components/MRNav";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  message,
  Upload,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { BaseUrl } from "../../../Tools/Config";
class UserEdit extends React.Component {
  state = {
    userInfo: {
      user_name: "",
      user_email: "",
      user_phone: "",
      user_age: "",
      user_birthday: "",
      user_nickname: "",
    },
    loading: false,
  };
  findUser = async () => {
    const { data } = await axios.get(
      `${BaseUrl}/user/${this.props.match.params.id}`
    );
    this.setState({
      userInfo: data.data,
    });
  };
  async componentDidMount() {
    await this.findUser();
  }
  changeInput = (e, v) => {
    switch (e.target.id) {
      case "user_name":
        this.setState({
          userInfo: {
            ...this.state.userInfo,
            user_name: e.target.value,
          },
        });
        break;
      case "user_email":
        this.setState({
          userInfo: {
            ...this.state.userInfo,
            user_email: e.target.value,
          },
        });
        break;
      case "user_phone":
        this.setState({
          userInfo: {
            ...this.state.userInfo,
            user_phone: e.target.value,
          },
        });
        break;
      case "user_nickname":
        this.setState({
          userInfo: {
            ...this.state.userInfo,
            user_nickname: e.target.value,
          },
        });
        break;
      case "user_age":
        this.setState({
          userInfo: {
            ...this.state.userInfo,
            user_age: v,
          },
        });
        break;
      case "user_birthday":
        this.setState({
          userInfo: {
            ...this.state.userInfo,
            user_birthday: v,
          },
        });
        break;
      default:
        break;
    }
  };
  onFinish = async (values) => {
    const { data } = await axios.put(
      `${BaseUrl}/user/${this.props.match.params.id}`,
      this.state.userInfo
    );
    message.info(data.message);
    this.props.history.push("/");
  };
  onFinishFailed = async () => {
    message.error("错了");
  };
  handleChange = (e) => {
    if (e.file.status === "done") {
      this.setState({
        userInfo: {
          ...this.state.userInfo,
          user_avatar: e.file.response.src,
        },
      });
    }
  };
  render() {
    const { userInfo, loading } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <>
        <MrNav title={"用户编辑"} showBack />
        <div className="marginBox bg-light p-4">
          <Form
            onFinishFailed={this.onFinishFailed}
            onFinish={this.onFinish}
            labelCol={{ span: 2, offset: 0 }}
          >
            {this.state.userInfo.user_name ? (
              <>
                <Form.Item
                  label="用户名"
                  name="user_name"
                  rules={[
                    { required: true, message: "Please input your user_name!" },
                  ]}
                  onChange={this.changeInput}
                  initialValue={this.state.userInfo.user_name}
                >
                  <Input placeholder="请输入用户名" />
                </Form.Item>
                <Form.Item
                  label="电子邮箱"
                  name="user_email"
                  rules={[
                    {
                      required: true,
                      message: "Please input your user_email!",
                    },
                  ]}
                  initialValue={this.state.userInfo.user_email}
                  onChange={this.changeInput}
                >
                  <Input placeholder="请输入电子邮箱" />
                </Form.Item>
                <Form.Item
                  label="手机号码"
                  name="user_phone"
                  rules={[
                    {
                      required: true,
                      message: "Please input your user_phone!",
                    },
                  ]}
                  initialValue={this.state.userInfo.user_phone}
                  onChange={this.changeInput}
                >
                  <Input placeholder="请输入手机号码" />
                </Form.Item>
                <Form.Item
                  label="用户昵称"
                  name="user_nickname"
                  onChange={this.changeInput}
                  initialValue={this.state.userInfo.user_nickname}
                >
                  <Input placeholder="请输入用户昵称" />
                </Form.Item>
                <Form.Item label="用户生日" name="user_birthday">
                  <DatePicker
                    placeholder={
                      this.state.userInfo.user_birthday
                        ? this.state.userInfo.user_birthday
                        : "请输入用户生日"
                    }
                    onChange={(e, v) =>
                      this.changeInput({ target: { id: "user_birthday" } }, v)
                    }
                  />
                </Form.Item>
                <Form.Item
                  label="用户年龄"
                  name="user_age"
                  initialValue={this.state.userInfo.user_age}
                >
                  <InputNumber
                    placeholder="用户年龄"
                    onChange={(e) =>
                      this.changeInput({ target: { id: "user_age" } }, e)
                    }
                  />
                </Form.Item>
              </>
            ) : null}
            <Form.Item label="用户头像">
              <Upload
                name="file"
                listType="picture-card"
                className="avatar-uploader"
                action="http://127.0.0.1:3000/tools/upload"
                onChange={this.handleChange}
                showUploadList={false}
              >
                {userInfo.user_avatar ? (
                  <img
                    src={userInfo.user_avatar}
                    alt="avatar"
                    style={{ width: "100%" }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>
            <Form.Item label="操作">
              <Button
                size="large"
                type="primary"
                className="m-1"
                htmlType="submit"
              >
                确定
              </Button>
              <Button
                onClick={() => this.props.history.go(-1)}
                size="large"
                type="ghost"
                className="m-1"
              >
                取消
              </Button>
            </Form.Item>
          </Form>
        </div>
      </>
    );
  }
}
const mapStateProps = (state) => {
  return { user: { ...state.user } };
};

export default connect(mapStateProps)(withRouter(UserEdit));
