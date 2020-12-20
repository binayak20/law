/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {
	Card,
	Table,
	Divider,
	Affix,
	Button,
	Icon,
	Popconfirm,
	message,
} from 'antd';
import NoteModal from '../NewNote/NoteModal';
// function confirm(e) {
// 	console.log(e);
// 	message.success('Delete Successfully');
// }

// function cancel(e) {
// 	console.log(e);
// 	message.error('Click on No');
// }

const data = [
	{
		key: '1',
		type: 'Case',
		title: 'Case Discusstion with Client',
		client: 'Mithum Ray',
		dateTime: '10/3/2019 12:29 AM',
	},
	{
		key: '2',
		type: 'Case',
		title: 'Second case hearing date fixed',
		client: 'Binayak Ray',
		dateTime: '17/3/2019 12:29 PM',
	},
	{
		key: '3',
		type: 'Client',
		title: 'Uttam Land Case Discuss with Lawyer',
		client: 'Madhury Mondal',
		dateTime: '17/3/2019 12:29 PM',
	},
];
class NoteList extends Component {
	state = {
		visible: false,
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
			noteData: record,
			visible: true,
		});
	}
	confirm = (e) => {
		console.log(e);
		message.success('Delete Successfully');
	};

	cancel = (e) => {
		console.log(e);
		message.error('Click on No');
	};
	render() {
		const { visible, noteData } = this.state;
		const columns = [
			{
				title: 'Type',
				dataIndex: 'type',
				key: 'type',
				render: (text, record) => (
					<a
						href='#'
						className='href-tag'
						onClick={() => this.viewDetails(record)}
					>
						{text}
					</a>
				),
			},
			{
				title: 'Title',
				dataIndex: 'title',
				key: 'title',
			},
			{
				title: 'Date & Time',
				dataIndex: 'dateTime',
				key: 'dateTime',
			},
			{
				title: 'Client',
				dataIndex: 'client',
				key: 'client',
			},

			{
				title: 'Action',
				key: 'action',
				render: (text, record) => (
					<span>
						<Icon
							type='edit'
							style={{ color: 'green', fontWeight: 'bold', cursor: 'pointer' }}
						/>
						<Divider type='vertical' />

						<Popconfirm
							title='Are you sure delete this task?'
							onConfirm={this.confirm}
							onCancel={this.cancel}
							okText='Yes'
							cancelText='No'
						>
							<Icon
								type='close-square'
								style={{ color: 'red', fontWeight: 'bold', cursor: 'pointer' }}
							/>
						</Popconfirm>
					</span>
				),
			},
		];
		return (
			<Card>
				<NoteModal
					updateState={this.updateState.bind(this)}
					visible={visible}
					noteDetails={noteData}
				/>
				<Affix className='FAB'>
					<Button
						className='affix-button'
						shape='circle'
						size='large'
						onClick={this.addClient}
						icon='plus'
					/>
				</Affix>
				<h2>Note List</h2>
				<Table columns={columns} dataSource={data} />
			</Card>
		);
	}
}

export default NoteList;
