import React, { Component } from "react";
import { Form, Input, Button, Select, DatePicker, Tabs } from "antd";
const { TabPane } = Tabs;
const { Option } = Select;
const config = {
  rules: [{ type: "object", required: true, message: "Please select time!" }]
};

class NewCaseForm extends Component {
  state = {
    loading: false
  };
  handleCancel = e => {
    this.props.updateState("visible", false);
  };
  // handleCancel = () => {
  //   this.props.updateState("visible", false);
  //   this.props.updateState("caseDetails", undefined);
  // };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Forms:" + values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Basic Details" key="1">
            <div>
              <Form.Item>
                {getFieldDecorator("status", {
                  //  initialValue: stadiumViewData ? stadiumViewData.stadium : "",
                  rules: [
                    {
                      required: true,
                      message: "Please input case status!"
                    }
                  ]
                })(
                  <Select
                    //  readOnly={details}
                    onChange={e => this.setState({ status: e })}
                    placeholder="Select Case Status"
                  >
                    <Option value="Opened">Opened</Option>
                    <Option value="Closed">Closed</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("client", {
                  //  initialValue: stadiumViewData ? stadiumViewData.stadium : "",
                  rules: [
                    {
                      required: true,
                      message: "Please input client name!"
                    }
                  ]
                })(
                  <Select
                    placeholder="Select client"
                    style={{ width: "100%" }}
                    onChange={e => this.setState({ client: e })}
                  >
                    <Option value="mithun">Mithun Ray</Option>
                    <Option value="binayak">Binayak Ray</Option>
                    <Option value="uttam"> Uttam Ray</Option>
                  </Select>
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("caseName", {
                  rules: [
                    {
                      required: true,
                      message: "Please input case name!"
                    }
                  ]
                })(
                  <Input
                    onChange={e => this.setState({ caseName: e.target.value })}
                    placeholder="Case Name"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("caseNumber", {
                  rules: [
                    {
                      required: true,
                      message: "Please input case number!"
                    }
                  ]
                })(
                  <Input
                    onChange={e =>
                      this.setState({ caseNumber: e.target.value })
                    }
                    placeholder="Case Number"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("date-time-picker", config)(
                  <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("remark", {})(
                  <Input
                    onChange={e => this.setState({ address: e.target.value })}
                    placeholder="Remark"
                  />
                )}
              </Form.Item>
            </div>
          </TabPane>
          <TabPane tab="Case Details" key="2">
            <div>
              <Form.Item>
                {getFieldDecorator("caseType", {
                  //  initialValue: stadiumViewData ? stadiumViewData.stadium : "",
                  rules: [
                    {
                      required: true,
                      message: "Please input case type!"
                    }
                  ]
                })(
                  <Input
                    onChange={e => this.setState({ caseType: e.target.value })}
                    placeholder="Case Type"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("fees", {
                  //  initialValue: stadiumViewData ? stadiumViewData.stadium : "",
                  rules: [
                    {
                      required: true,
                      message: "Please input client name!"
                    }
                  ]
                })(
                  <Input
                    onChange={e => this.setState({ caseFees: e.target.value })}
                    placeholder="Case Fees"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("caseCharges", {
                  rules: [
                    {
                      required: true,
                      message: "Please input case charges!"
                    }
                  ]
                })(
                  <Input
                    onChange={e =>
                      this.setState({ caseCharges: e.target.value })
                    }
                    placeholder="Case Charges"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("caseDescription", {
                  rules: [
                    {
                      required: true,
                      message: "Please input case description!"
                    }
                  ]
                })(
                  <Input
                    onChange={e =>
                      this.setState({ description: e.target.value })
                    }
                    placeholder="Case Description"
                  />
                )}
              </Form.Item>
            </div>
          </TabPane>
          <TabPane tab="Opponents Details" key="3">
            <Form.Item>
              {getFieldDecorator("opponentName", {
                rules: [
                  {
                    required: true,
                    message: "Please input opponent name!"
                  }
                ]
              })(
                <Input
                  onChange={e =>
                    this.setState({ opponentName: e.target.value })
                  }
                  placeholder="Opponent name"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("opponentLawyer", {
                rules: [
                  {
                    required: true,
                    message: "Please input opponentLawyer!"
                  }
                ]
              })(
                <Input
                  onChange={e =>
                    this.setState({ opponentLawyer: e.target.value })
                  }
                  placeholder="Opponent Lawyer"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("opponentPhone", {
                rules: [
                  {
                    required: true,
                    message: "Please input opponent lawyer!"
                  }
                ]
              })(
                <Input
                  onChange={e =>
                    this.setState({ opponentLawyer: e.target.value })
                  }
                  placeholder="Opponent Lawyer"
                />
              )}
            </Form.Item>
          </TabPane>
          <TabPane tab="Court Details" key="4">
            <Form.Item>
              {getFieldDecorator("courtName", {
                rules: [
                  {
                    required: true,
                    message: "Please input court name!"
                  }
                ]
              })(
                <Input
                  onChange={e => this.setState({ courtName: e.target.value })}
                  placeholder="Court Name"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("courtCity", {
                rules: [
                  {
                    required: true,
                    message: "Please input court city!"
                  }
                ]
              })(
                <Input
                  onChange={e => this.setState({ courtCity: e.target.value })}
                  placeholder="Court City"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("judgeName", {})(
                <Input
                  onChange={e => this.setState({ judgeName: e.target.value })}
                  placeholder="Judge Name"
                />
              )}
            </Form.Item>
            <div style={{ textAlign: "center" }}>
              <Button
                style={{ background: "#ddd", marginRight: 10 }}
                key="back"
                onClick={this.handleCancel}
              >
                Cancel
              </Button>
              <Button
                style={{ background: "#744930", color: "#fff" }}
                key="submit"
                onClick={this.handleSubmit}
              >
                Save
              </Button>
            </div>
          </TabPane>
        </Tabs>
      </Form>
    );
  }
}

const CaseForm = Form.create()(NewCaseForm);
export default CaseForm;
