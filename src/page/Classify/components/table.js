import React from "react";
import { Table, Button } from "antd";
import { connect } from "react-redux";
import { TOGGLE_CLASSIFY_EDIT_MODAL } from "../../../Tools/ActionType";
const pagination = {
  pageSize: 7,
  showQuickJumper: true,
  responsive: true,
};
class classifyTable extends React.Component {
  render() {
    const columns = [
      {
        title: "分类名称",
        dataIndex: "classify_name",
        key: "classify_name",
        align: "center",
        ellipsis: true,
        width: "15%",
      },
      {
        title: "分类别名",
        dataIndex: "classify_alias",
        key: "classify_alias",
        align: "center",
        ellipsis: true,
        width: "15%",
      },
      {
        title: "分类描述",
        dataIndex: "classify_description",
        key: "classify_description",
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
              <Button type="primary" onClick={() => this.props.toggleModal()}>
                编辑
              </Button>
            </>
          );
        },
      },
    ];
    const { classify } = this.props;
    return (
      <div className="marginBox bg-light">
        <Button
          className="mb-4"
          size="large"
          onClick={() => this.props.toggleModal()}
        >
          创建分类
        </Button>
        <Table
          bordered
          pagination={pagination}
          columns={columns}
          dataSource={classify.dataSource}
        ></Table>
      </div>
    );
  }
}
const mapStatesProps = (state) => {
  return {
    classify: { ...state.classify },
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    toggleModal: () => {
      dispatch({
        type: TOGGLE_CLASSIFY_EDIT_MODAL,
      });
    },
  };
};
export default connect(mapStatesProps, mapDispatchProps)(classifyTable);
