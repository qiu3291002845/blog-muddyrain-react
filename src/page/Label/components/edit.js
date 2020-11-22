import React from "react";
import { Modal, Form, Input, message } from "antd";
import { connect } from "react-redux";
import {
  LABEL_REQUEST_DATA,
  TOGGLE_LABEL_EDIT_MODAL,
} from "../../../Tools/ActionType";
import Axios from "axios";
import { BaseUrl } from "../../../Tools/Config";
import { withRouter } from "react-router-dom";
class LabelEdit extends React.Component {
  state = {
    labelInfo: {},
  };
  findLabel = async () => {
    if (this.props.label.editId) {
      const { data } = await Axios.get(
        `${BaseUrl}/label/${this.props.label.editId}`
      );
      this.setState({
        labelInfo: data.data,
      });
    }
  };
  componentDidMount() {
    this.findLabel();
  }
  componentWillUnmount() {
    this.setState({
      labelInfo: {},
    });
  }
  findTable = (data) => {
    if (data.statusCode === 500) {
      message.error(data.message);
    } else {
      message.success(data.message);
      this.props.dispatch({
        type: TOGGLE_LABEL_EDIT_MODAL,
      });
      this.props.dispatch({
        type: LABEL_REQUEST_DATA,
      });
    }
  };
  handleChange = (e, key) => {
    switch (key) {
      case "label_name":
        this.setState({
          labelInfo: {
            ...this.state.labelInfo,
            label_name: e.target.value,
          },
        });
        break;
      case "label_alias":
        this.setState({
          labelInfo: {
            ...this.state.labelInfo,
            label_alias: e.target.value,
          },
        });
        break;
      case "label_description":
        this.setState({
          labelInfo: {
            ...this.state.labelInfo,
            label_description: e.target.value,
          },
        });
        break;
      default:
        break;
    }
  };
  render() {
    const { label } = this.props;
    const { labelInfo } = this.state;
    return (
      <>
        <Modal
          width={780}
          title="Basic Modal"
          visible={label.visible}
          onCancel={() =>
            this.props.dispatch({
              type: TOGGLE_LABEL_EDIT_MODAL,
            })
          }
          onOk={async () => {
            if (!label.editId) {
              if (
                labelInfo.label_name === "" ||
                labelInfo.label_name === undefined
              ) {
                message.info("分类名称不能为空");
              } else {
                const { data } = await Axios.post(
                  `${BaseUrl}/label`,
                  labelInfo
                );
                this.findTable(data);
              }
            } else {
              const { data } = await Axios.put(
                `${BaseUrl}/label/${label.editId}`,
                labelInfo
              );
              this.findTable(data);
            }
          }}
        >
          <Form>
            <Form.Item label="标签名称">
              <Input
                value={labelInfo.label_name}
                placeholder={"请输入标签名称"}
                onChange={(e) => this.handleChange(e, "label_name")}
              ></Input>
            </Form.Item>
            <Form.Item label="标签别名">
              <Input
                placeholder={"请输入标签别名"}
                onChange={(e) => this.handleChange(e, "label_alias")}
                value={labelInfo.label_alias}
              ></Input>
            </Form.Item>
            <Form.Item label="标签描述">
              <Input.TextArea
                autoSize
                placeholder={"请输入标签描述"}
                onChange={(e) => this.handleChange(e, "label_description")}
                value={labelInfo.label_description}
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
    label: { ...state.label },
  };
};
export default connect(mapStateProps)(withRouter(LabelEdit));
