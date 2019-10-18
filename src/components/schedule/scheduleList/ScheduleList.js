import React, { Component } from "react";
import {
  Card,
  Table,
  Divider,
  Tag,
  Affix,
  Button,
  Icon,
  Popconfirm,
  message
} from "antd";
import ScheduleModal from "../ScheduleModal/ScheduleModal";
//import NewClient from "./NewClient";
function confirm(e) {
  console.log(e);
  message.success("Delete Successfully");
}

function cancel(e) {
  console.log(e);
  message.error("Click on No");
}

const data = [
  {
    key: "1",
    type:"Case Discusstion",
    title:"Schedule Title",
    client: "Mithum Ray",
    dateTime:"10/3/2019 12:29 AM",
    // phone: "01558903481",
    // address: "Khulna, Bangladesh",
    // city: "Khulna",
    // email: "madhuryps@gmail.com",
    // remark: "Good Client"
  },
  {
    key: "2",
    type:"Case Hearing",
    title:"Schedule Title",
    client: "Binayak Ray",
    dateTime:"17/3/2019 12:29 PM",
  },
  {
    key: "3",
    type:"Meeting with Client",
    title:"Schedule Title",
    client: "Madhury Mondal",
    dateTime:"17/3/2019 12:29 PM",
  }
];
class ScheduleList extends Component {
  state = {
    visible: false
  };
  addClient = () => {
    this.setState({ visible: true });
  };
  updateState(name, value) {
    this.setState({ [name]: value });
  }
  viewDetails(record) {
    console.log(record);
    this.setState({
      scheduleData: record,
      visible: true
    });
  }
  render() {
    const { visible, scheduleData } = this.state;
    const columns = [
      {
        title: "Type",
        dataIndex: "type",
        key: "type",
        render: (text, record) => (
          <a
            className="href-tag"
            onClick={() => this.viewDetails(record)}
          >
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
              onConfirm={confirm}
              onCancel={cancel}
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
    return (
      <Card>
        <ScheduleModal 
         updateState={this.updateState.bind(this)}
         visible={visible}
         scheduleDetails={scheduleData}
        />
        <Affix className="FAB">
          <Button
            className="affix-button"
            shape="circle"
            size="large"
            onClick={this.addClient}
            icon="plus"
          />
        </Affix>
        <h2>Schedule List</h2>
        <Table columns={columns} dataSource={data} />
      </Card>
    );
  }
}

export default ScheduleList;
