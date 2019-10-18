import React, { Component } from "react";
import { Form, Input } from "antd";

class InputFormItem extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const {
      name,
      required,
      message,
      placeholder,
      readOnly,
      updateState
    } = this.props;
    return (
      <Form.Item>
        {getFieldDecorator(`${name}`, {
          //  initialValue: stadiumViewData ? stadiumViewData.stadium : "",
          rules: [
            {
              required: required,
              message: message
            }
          ]
        })(
          <Input
            readOnly={readOnly}
            onChange={e => updateState([name], e.target.value )}
            placeholder={placeholder}
          />
        )}
      </Form.Item>
    );
  }
}
const InputForm = Form.create()(InputFormItem);
export default InputForm;
