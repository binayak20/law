import React, { Component } from "react";
import { Table, Divider, Icon, Popconfirm } from "antd";
class DataList extends Component {
  render() {
    const { data } = this.props;
    const columns = [
      {
        title: "Type",
        dataIndex: "type",
        key: "type",
        render: (text, record) => (
          <a className="href-tag" onClick={() => this.viewDetails(record)}>
            {text}
          </a>
        )
      },
      {
        title: "Title",
        dataIndex: "title",
        key: "title"
      },
      {
        title: "Date & Time",
        dataIndex: "dateTime",
        key: "dateTime"
      },
      {
        title: "Client",
        dataIndex: "client",
        key: "client"
      },

      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <Icon
              type="edit"
              style={{ color: "green", fontWeight: "bold", cursor: "pointer" }}
            />
            <Divider type="vertical" />

            <Popconfirm
              title="Are you sure delete this task?"
             // onConfirm={confirm}
              //onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Icon
                type="close-square"
                style={{ color: "red", fontWeight: "bold", cursor: "pointer" }}
              />
            </Popconfirm>
          </span>
        )
      }
    ];
    return <Table columns={columns} dataSource={data} />;
  }
}

export default DataList;
