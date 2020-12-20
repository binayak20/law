import React, { Component } from 'react';
import { Form, Input, Button, Select, DatePicker } from 'antd';

const { Option } = Select;
const config = {
	rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};
class NewScheduleForm extends Component {
	state = {
		loading: false,
	};
	handleCancel = (e) => {
		this.props.updateState('visible', false);
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if (!err) {
				console.log('Forms:' + values);
			}
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form>
				<Form.Item>
					{getFieldDecorator('type', {
						//  initialValue: stadiumViewData ? stadiumViewData.stadium : "",
						rules: [
							{
								required: true,
								message: 'Please input client type!',
							},
						],
					})(
						<Select
							placeholder='Schedule Type'
							style={{ width: '100%' }}
							onChange={(e) => this.setState({ type: e })}
						>
							<Option value='hearing'>Case Hearing</Option>
							<Option value='discuss'>Case Discussion</Option>
							<Option value='meeting'>Meeting with Client</Option>
							<Option value='others'>Others</Option>
						</Select>
					)}
				</Form.Item>
				{this.state.type === 'hearing' || this.state.type === 'discuss' ? (
					<Form.Item>
						{getFieldDecorator('case', {
							rules: [
								{
									required: true,
									message: 'Please select case!',
								},
							],
						})(
							<Select
								placeholder='Select Case'
								style={{ width: '100%' }}
								onChange={(e) => this.setState({ case: e })}
							>
								<Option value='hearing'>Case 1</Option>
								<Option value='discuss'>Case 2</Option>
								<Option value='meeting'>Case 3</Option>
								<Option value='others'>Case 4</Option>
							</Select>
						)}
					</Form.Item>
				) : (
					''
				)}
				{this.state.type === 'meeting' ? (
					<Form.Item>
						{getFieldDecorator('client', {
							rules: [
								{
									required: true,
									message: 'Please select client!',
								},
							],
						})(
							<Select
								placeholder='Select client'
								style={{ width: '100%' }}
								onChange={(e) => this.setState({ client: e })}
							>
								<Option value='hearing'>Nithun Ray</Option>
								<Option value='discuss'>Binayak Ray</Option>
								<Option value='meeting'>Madhury Ray</Option>
							</Select>
						)}
					</Form.Item>
				) : (
					''
				)}
				{this.state.type === 'others' ? (
					<Form.Item>
						{getFieldDecorator('client', {
							rules: [
								{
									required: true,
									message: 'Please select client!',
								},
							],
						})(
							<Input
								onChange={(e) =>
									this.setState({ scheduleType: e.target.value })
								}
								placeholder='Schedule Type'
							/>
						)}
					</Form.Item>
				) : (
					''
				)}
				<Form.Item>
					{getFieldDecorator('title', {
						rules: [
							{
								required: true,
								message: 'Please input client title!',
							},
						],
					})(
						<Input
							onChange={(e) => this.setState({ title: e.target.value })}
							placeholder='Schedule Title'
						/>
					)}
				</Form.Item>

				<Form.Item>
					{getFieldDecorator('details', {
						rules: [
							{
								required: true,
								message: 'Please input client details!',
							},
						],
					})(
						<Input
							onChange={(e) => this.setState({ details: e.target.value })}
							placeholder='Details'
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator(
						'remark',
						{}
					)(
						<Input
							onChange={(e) => this.setState({ address: e.target.value })}
							placeholder='Remark'
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator(
						'date-time-picker',
						config
					)(<DatePicker showTime format='YYYY-MM-DD HH:mm:ss' />)}
				</Form.Item>
				<div style={{ textAlign: 'center' }}>
					<Button
						style={{ background: '#ddd', marginRight: 10 }}
						key='back'
						onClick={this.handleCancel}
					>
						Cancel
					</Button>
					<Button
						style={{ background: '#744930', color: '#fff' }}
						key='submit'
						onClick={this.handleSubmit}
					>
						Save
					</Button>
				</div>
			</Form>
		);
	}
}

const ScheduleForm = Form.create()(NewScheduleForm);
export default ScheduleForm;
