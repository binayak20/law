import React, { Component } from "react";
import {
  Card,
  Table,
  Divider,
  Affix,
  Button,
  Icon,
  Popconfirm,
  message
} from "antd";
import ViewEvidence from "./ViewEvidence";
import EvidenceModal from "../NewEvidence/EvidenceModal";
//import NoteModal from "../NewNote/NoteModal";
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
    type: "video",
    client: "Mithum Ray",
    dateTime: "10/3/2019 12:29 AM",
    evidence: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    name: "Mr. Jhon Murdered evidence",
    description: "Loren spum description of jhon murdered case",
    case: "Mr. Jhon Murdered case"
  },
  {
    key: "2",
    type: "image",
    client: "Binayak Ray",
    dateTime: "17/3/2019 12:29 PM",

    evidence: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    name: "Mr. Jhon Murdered evidence",
    description: "Loren spum description of jhon murdered case",
    case: "Mr. Jhon Murdered case"
  },
  {
    key: "3",
    type: "audio",
    evidence: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    name: "Mr. Jhon Murdered evidence",
    description: "Loren spum description of jhon murdered case",
    case: "Mr. Jhon Murdered case",
    client: "Molay Ray",
    dateTime: "17/3/2019 12:29 PM"
  },
  {
    key: "4",
    type: "others",
    evidence: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    name: "Mr. Jhon Murdered evidence",
    description: "Loren spum description of jhon murdered case",
    case: "Mr. Jhon Murdered case",
    client: "Ripan Ray",
    dateTime: "17/3/2019 12:29 PM"
  }
];
class EvidenceList extends Component {
  state = {
    visible: false,
    visibleEvidence: false
  };
  addEvidence = () => {
    this.setState({ visible: true });
  };
  updateState(name, value) {
    this.setState({ [name]: value });
  }
  viewDetails(record) {
    console.log(record);
    this.setState({
      evidenceData: record,
      visible: true
    });
  }
  viewEvidence(record) {
    console.log(record);
    this.setState({
      evidence: record.evidence,
      visibleEvidence: true,
      evidenceType:record.type
    });
  }
  render() {
    const { visible, evidenceData, visibleEvidence, evidence, evidenceType } = this.state;
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
        title: "Evidence",
        dataIndex: "evidence",
        key: "evidence",
        render: (text, record) => (
          <Icon
            onClick={() => this.viewEvidence(record)}
            style={{ color: " #a98067", fontSize: 30, cursor: "pointer" }}
            type={
              record.type === "video"
                ? "video-camera"
                : record.type === "audio"
                ? "audio"
                : record.type === "image"
                ? "file-image"
                : "file"
            }
          />
        )
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      //   {
      //     title: "Description",
      //     dataIndex: "description",
      //     key: "description"
      //   },
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
        title: "Case",
        dataIndex: "case",
        key: "case"
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
        <EvidenceModal
          updateState={this.updateState.bind(this)}
          visible={visible}
          evidenceDetails={evidenceData}
        />
        <ViewEvidence
          updateState={this.updateState.bind(this)}
          visibleEvidence={visibleEvidence}
          evidence={evidence}
          evidenceType={evidenceType}
        />
        <Affix className="FAB">
          <Button
            className="affix-button"
            shape="circle"
            size="large"
            onClick={this.addEvidence}
            icon="plus"
          />
        </Affix>
        <h2>Evidence List</h2>
        <Table columns={columns} dataSource={data} />
      </Card>
    );
  }
}

export default EvidenceList;
