import React from "react";
import { Table, Button } from "antd";
import { connect } from "react-redux";
import { TOGGLE_LABEL_EDIT_MODAL } from "../../../Tools/ActionType";
const pagination = {
  pageSize: 7,
  showQuickJumper: true,
  responsive: true,
};
class labelTable extends React.Component {
  render() {
    const columns = [
      {
        title: "标签名称",
        dataIndex: "label_name",
        key: "label_name",
        align: "center",
        ellipsis: true,
        width: "15%",
      },
      {
        title: "标签别名",
        dataIndex: "label_alias",
        key: "label_alias",
        align: "center",
        ellipsis: true,
        width: "15%",
      },
      {
        title: "标签描述",
        dataIndex: "label_description",
        key: "label_description",
        align: "center",
        ellipsis: true,
        width: "40%",
      },
      {
        title: "操作",
        align: "center",
        render: (text, row) => {
          return (
            <>
              <Button
                type="primary"
                onClick={() => this.props.toggleModal(text.label_id)}
              >
                编辑
              </Button>
            </>
          );
        },
      },
    ];
    const { label } = this.props;
    return (
      <div className="marginBox bg-light">
        <Button
          className="mb-4"
          size="large"
          onClick={() => this.props.toggleModal()}
        >
          创建标签
        </Button>
        <Table
          bordered
          pagination={pagination}
          columns={columns}
          dataSource={label.dataSource}
        ></Table>
      </div>
    );
  }
}
const mapStatesProps = (state) => {
  return {
    label: { ...state.label },
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    toggleModal: (id) => {
      dispatch({
        type: TOGGLE_LABEL_EDIT_MODAL,
        value: id,
      });
    },
  };
};
export default connect(mapStatesProps, mapDispatchProps)(labelTable);
