import React from "react";
import { Modal } from "antd";
class articleEdit extends React.Component {
  render() {
    return (
      <>
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}

export default articleEdit;
