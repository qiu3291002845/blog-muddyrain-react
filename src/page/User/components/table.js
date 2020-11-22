import React from "react";
import { Table, Image, Button } from "antd";
import { connect } from "react-redux";
import { fromDate } from "../../../Tools/Config";
import { Link, withRouter } from "react-router-dom";
const columns = [
  {
    title: "用户名",
    dataIndex: "user_name",
    key: "user_name",
    width: 150,
    ellipsis: true,
    align: "center",
  },
  {
    title: "头像",
    dataIndex: "user_avatar",
    key: "user_avatar",
    width: 100,
    align: "center",
    render: (text, record) => (
      <Image
        width={50}
        height={50}
        src={text}
        fallback="https://czh1010.oss-cn-beijing.aliyuncs.com/timg.jpg"
      />
    ),
  },
  {
    title: "电子邮箱",
    dataIndex: "user_email",
    key: "user_email",
    width: 200,
    align: "center",
    ellipsis: true,
  },
  {
    title: "昵称",
    dataIndex: "user_nickname",
    key: "user_nickname",
    width: 100,
    align: "center",
    ellipsis: true,
  },
  {
    title: "注册时间",
    dataIndex: "user_regisration_time",
    key: "user_regisration_time",
    width: 200,
    align: "center",
    render: (text, record) => <span>{fromDate(text)}</span>,
  },
  {
    title: "操作",
    width: 200,
    align: "center",
    render: (text, record) => {
      return (
        <div>
          <Button type="primary">
            <Link to={`/home/userEdit/${text.user_id}`}>编辑</Link>
          </Button>
        </div>
      );
    },
  },
];
const pagination = {
  pageSize: 7,
  showQuickJumper: true,
  responsive: true,
};
class UserTable extends React.Component {
  state = {};
  render() {
    const { dataSource } = this.props;
    return (
      <>
        {/* <Button
          onClick={this.toEdit}
          type="default"
          className="mt-3 ml-3"
          size="large"
        >
          新建
        </Button> */}
        <div className="marginBox">
          <Table
            bordered
            pagination={pagination}
            columns={columns}
            dataSource={dataSource}
          />
        </div>
      </>
    );
  }
}

const mapStateProps = (state) => {
  return { ...state.user };
};
export default connect(mapStateProps, null)(withRouter(UserTable));
