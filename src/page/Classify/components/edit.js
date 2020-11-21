import React from "react";
import { Modal, Form, Input } from "antd";
import { connect } from "react-redux";
import { TOGGLE_CLASSIFY_EDIT_MODAL } from "../../../Tools/ActionType";
class ClassifyEdit extends React.Component {
  render() {
    const { classify } = this.props;
    return (
      <>
        <Modal
          title="Basic Modal"
          visible={classify.visible}
          onCancel={() =>
            this.props.dispatch({
              type: TOGGLE_CLASSIFY_EDIT_MODAL,
            })
          }
        >
          <Form>
            <Form.Item>
              <Input></Input>
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
export default connect(mapStateProps)(ClassifyEdit);
