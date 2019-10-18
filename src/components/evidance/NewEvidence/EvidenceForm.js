import React, { Component } from "react";
import { Form, Input, Button, Select, DatePicker, Upload,Radio, Icon } from "antd";

const { Option } = Select;
const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
  };
class NewEvidenceForm extends Component {
  state = {
    loading: false
  };
  handleCancel = e => {
    this.props.updateState("visible", false);
  };
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
           <Form.Item label="Evidence Type">
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value="video">Video</Radio>
              <Radio value="audio">Audio</Radio>
              <Radio value="image">Image</Radio>
              <Radio value="others">Others</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input evidence name!"
              }
            ]
          })(
            <Input
              onChange={e => this.setState({ title: e.target.value })}
              placeholder="Evidence Name"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("details", {
            rules: [
              {
                required: true,
                message: "Please input evidence details!"
              }
            ]
          })(
            <Input
              onChange={e => this.setState({ details: e.target.value })}
              placeholder="Evidence Details"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("case", {
            rules: [
              {
                required: true,
                message: "Please select case!"
              }
            ]
          })(
            <Select placeholder="Select Case" style={{ width: '100%' }} onChange={(e)=>this.setState({case:e})}>
              <Option value="hearing">Case 1</Option>
              <Option value="discuss">Case 2</Option>
              <Option value="meeting">
                Case 3
              </Option>
              <Option value="others">Case 4</Option>
            </Select>
          )}
        </Form.Item>
        
       
        <Form.Item>
          {getFieldDecorator("client", {
            rules: [
              {
                required: true,
                message: "Please select client!"
              }
            ]
          })(
            <Select placeholder="Select client" style={{ width: '100%' }} onChange={(e)=>this.setState({client:e})}>
              <Option value="hearing">Nithun Ray</Option>
              <Option value="discuss">Binayak Ray</Option>
              <Option value="meeting">
                Madhury Ray
              </Option>
            </Select>
          )}
        </Form.Item>
       
       
        
       
        <Form.Item>
          {getFieldDecorator('date-time-picker', config)(
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
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
      </Form>
    );
  }
}

const EvidenceForm = Form.create()(NewEvidenceForm);
export default EvidenceForm;
