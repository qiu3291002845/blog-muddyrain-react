import React from "react";
import { Modal, Form, Input, message } from "antd";
import { connect } from "react-redux";
import {
  CLASSIFY_REQUEST_DATA,
  TOGGLE_CLASSIFY_EDIT_MODAL,
} from "../../../Tools/ActionType";
import Axios from "axios";
import { BaseUrl } from "../../../Tools/Config";
import { withRouter } from "react-router-dom";
class ClassifyEdit extends React.Component {
  state = {
    classifyInfo: {},
  };
  findClassify = async () => {
    if (this.props.classify.editId) {
      const { data } = await Axios.get(
        `${BaseUrl}/classify/${this.props.classify.editId}`
      );
      this.setState({
        classifyInfo: data.data,
      });
    }
  };
  componentDidMount() {
    this.findClassify();
  }
  componentWillUnmount() {
    this.setState({
      classifyInfo: {},
    });
  }
  findTable = (data) => {
    if (data.statusCode === 500) {
      message.error(data.message);
    } else {
      message.success(data.message);
      this.props.dispatch({
        type: TOGGLE_CLASSIFY_EDIT_MODAL,
      });
      this.props.dispatch({
        type: CLASSIFY_REQUEST_DATA,
      });
    }
  };
  handleChange = (e, key) => {
    switch (key) {
      case "classify_name":
        this.setState({
          classifyInfo: {
            ...this.state.classifyInfo,
            classify_name: e.target.value,
          },
        });
        break;
      case "classify_alias":
        this.setState({
          classifyInfo: {
            ...this.state.classifyInfo,
            classify_alias: e.target.value,
          },
        });
        break;
      case "classify_description":
        this.setState({
          classifyInfo: {
            ...this.state.classifyInfo,
            classify_description: e.target.value,
          },
        });
        break;
      default:
        break;
    }
  };
  render() {
    const { classify } = this.props;
    const { classifyInfo } = this.state;
    return (
      <>
        <Modal
          width={780}
          title="Basic Modal"
          visible={classify.visible}
          onCancel={() =>
            this.props.dispatch({
              type: TOGGLE_CLASSIFY_EDIT_MODAL,
            })
          }
          onOk={async () => {
            if (!classify.editId) {
              if (
                classifyInfo.classify_name === "" ||
                classifyInfo.classify_name === undefined
              ) {
                message.info("分类名称不能为空");
              } else {
                const { data } = await Axios.post(
                  `${BaseUrl}/classify`,
                  classifyInfo
                );
                this.findTable(data);
              }
            } else {
              const { data } = await Axios.put(
                `${BaseUrl}/classify/${classify.editId}`,
                classifyInfo
              );
              this.findTable(data);
            }
          }}
        >
          <Form>
            <Form.Item label="分类名称">
              <Input
                value={classifyInfo.classify_name}
                placeholder={"请输入分类名称"}
                onChange={(e) => this.handleChange(e, "classify_name")}
              ></Input>
            </Form.Item>
            <Form.Item label="分类别名">
              <Input
                placeholder={"请输入分类别名"}
                onChange={(e) => this.handleChange(e, "classify_alias")}
                value={classifyInfo.classify_alias}
              ></Input>
            </Form.Item>
            <Form.Item label="分类描述">
              <Input.TextArea
                autoSize
                placeholder={"请输入分类描述"}
                onChange={(e) => this.handleChange(e, "classify_description")}
                value={classifyInfo.classify_description}
              ></Input.TextArea>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
}
const mapStateProps = (state) => {
  return {
    classify: { ...state.classify },
  };
};
export default connect(mapStateProps)(withRouter(ClassifyEdit));
