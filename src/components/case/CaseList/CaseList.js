/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import {
	Card,
	Table,
	Divider,
	Tag,
	Affix,
	Button,
	Icon,
	Popconfirm,
	message,
} from 'antd';
import NewCaseModal from '../NewCase/NewCaseModal';
//import ScheduleModal from "../ScheduleModal/ScheduleModal";
//import NewClient from "./NewClient";

const data = [
	{
		key: '1',
		caseName: 'Mr. Jhon Murdur Case',
		caseNumber: '001',
		client: 'Mithum Ray',
		caseDate: '10/3/2019',
		status: 'Opend',
	},
	{
		key: '2',
		caseName: 'Corfu Channel Case',
		caseNumber: '002',
		client: 'Binayak Ray',
		caseDate: '17/3/2019',
		status: 'Closed',
	},
	{
		key: '3',
		caseName: 'Uttam Land Case',
		caseNumber: '003',
		client: 'Uttam Ray',
		caseDate: '17/3/2019',
		status: 'Opend',
	},
];
class CaseList extends Component {
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
			caseDetails: record,
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
		const { visible, caseDetails } = this.state;
		const columns = [
			{
				title: 'Case Name',
				dataIndex: 'caseName',
				key: 'caseName',
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
				title: 'Case Number',
				dataIndex: 'caseNumber',
				key: 'caseNumber',
			},
			{
				title: 'Case Date',
				dataIndex: 'caseDate',
				key: 'caseDate',
			},
			{
				title: 'Client',
				dataIndex: 'client',
				key: 'client',
			},
			{
				title: 'Status',
				dataIndex: 'status',
				key: 'status',
				render: (status, record) => (
					<Tag color={status === 'Closed' ? '#f50' : '#2db7f5'}>
						{status.toUpperCase()}
					</Tag>
				),
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
				{/* <ScheduleModal 
         updateState={this.updateState.bind(this)}
         visible={visible}
         scheduleDetails={caseDetails}
        /> */}
				<NewCaseModal
					updateState={this.updateState.bind(this)}
					visible={visible}
					caseDetails={caseDetails}
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
				<h2>Case List</h2>
				<Table columns={columns} dataSource={data} />
			</Card>
		);
	}
}

export default CaseList;
