import React, { Component } from "react";
import { Form, Button } from "antd";
import InputForm from "../UsableComponent/InputForm";
class NewClientForm extends Component {
  state = {
    loading: false
  };
  handleCancel = e => {
    this.props.updateState("visible", false);
    this.props.form.resetFields();
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          console.log(values)
      }
    });
  };
  updateState(name, value){
    this.setState({[name]:value});
  }
  render() {
    return (
      <Form >
        <InputForm 
            form={this.props.form}
            name="name"
            required={true}
            message="Please input client name!"
            placeholder="Client Name"
            updateState={this.updateState.bind(this)}
        />
         <InputForm 
            form={this.props.form}
            name="address"
            required={true}
            message="Please input client address!"
            placeholder="Client Address"
            updateState={this.updateState.bind(this)}
        />
         <InputForm 
            form={this.props.form}
            name="city"
            required={true}
            message="Please input client city!"
            placeholder="Client City"
            updateState={this.updateState.bind(this)}
        />
         <InputForm 
            form={this.props.form}
            name="phone"
            required={true}
            message="Please input client phone!"
            placeholder="Client Phone Number"
            updateState={this.updateState.bind(this)}
        />
         <InputForm 
            form={this.props.form}
            name="email"
            required={false}
            placeholder="Client Email"
            updateState={this.updateState.bind(this)}
        />
        <InputForm 
            form={this.props.form}
            name="remark"
            required={false}
            placeholder="Remark"
            updateState={this.updateState.bind(this)}
        />
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

const ClientForm = Form.create()(NewClientForm);
export default ClientForm;
