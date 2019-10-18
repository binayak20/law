import React, { Component } from "react";
import { Tabs, Icon, Row, Col } from "antd";

const { TabPane } = Tabs;
class NoteDetails extends Component {
  render() {
    const { noteDetails } = this.props;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <Icon type="apple" />
              Basic Details
            </span>
          }
          key="1"
        >
          <ul className="details-ul">
            <li className="details-li">
              <Row>
                <Col span={12}>
                  <span className="text-bold">Schedule Type</span>
                </Col>
                <Col span={12}>{noteDetails.type}</Col>
              </Row>
            </li>
            <li className="details-li">
              <Row>
                <Col span={12}>
                  <span className="text-bold">Schedule Title</span>
                </Col>
                <Col span={12}>{noteDetails.title}</Col>
              </Row>
            </li>
            <li className="details-li">
              <Row>
                <Col span={12}>
                  <span className="text-bold">Schedule Date & Time</span>
                </Col>
                <Col span={12}>{noteDetails.dateTime}</Col>
              </Row>
            </li>
            <li className="details-li">
              <Row>
                <Col span={12}>
                  <span className="text-bold">Client</span>
                </Col>
                <Col span={12}>{noteDetails.client}</Col>
              </Row>
            </li>
          </ul>
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="android" />
              Case
            </span>
          }
          key="2"
        >
          Tab 2
        </TabPane>
      </Tabs>
    );
  }
}

export default NoteDetails;
