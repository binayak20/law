import React, { Component } from "react";
import { Tabs, Icon, Row, Col } from "antd";

const { TabPane } = Tabs;
class CaseDetails extends Component {
  render() {
    const { caseDetails } = this.props;
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
                  <span className="text-bold">Case Name</span>
                </Col>
                <Col span={12}>{caseDetails.caseName}</Col>
              </Row>
            </li>
            <li className="details-li">
              <Row>
                <Col span={12}>
                  <span className="text-bold">Case Number</span>
                </Col>
                <Col span={12}>{caseDetails.caseNumber}</Col>
              </Row>
            </li>
            <li className="details-li">
              <Row>
                <Col span={12}>
                  <span className="text-bold">Client Name</span>
                </Col>
                <Col span={12}>{caseDetails.client}</Col>
              </Row>
            </li>
            <li className="details-li">
              <Row>
                <Col span={12}>
                  <span className="text-bold">Case Date</span>
                </Col>
                <Col span={12}>{caseDetails.caseDate}</Col>
              </Row>
            </li>
            <li className="details-li">
              <Row>
                <Col span={12}>
                  <span className="text-bold">Status</span>
                </Col>
                <Col span={12}>{caseDetails.status}</Col>
              </Row>
            </li>
            {/* <li className="details-li">
              <Row>
                <Col span={12}>
                  <span className="text-bold">Remark</span>
                </Col>
                <Col span={12}>{caseDetails.remark}</Col>
              </Row>
            </li> */}
          </ul>
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="android" />
              Case Details
            </span>
          }
          key="2"
        >
          Tab 2
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="android" />
             Evidences
            </span>
          }
          key="3"
        >
          Tab 3
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="android" />
              Schedules
            </span>
          }
          key="4"
        >
          Tab 4
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="android" />
              Notes
            </span>
          }
          key="5"
        >
          Tab 5
        </TabPane>
      </Tabs>
    );
  }
}

export default CaseDetails;
