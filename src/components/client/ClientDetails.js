import React, { Component } from 'react';
import { Tabs, Icon, Row, Col, Collapse } from 'antd';

const { Panel } = Collapse;

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;
const { TabPane } = Tabs;
class ClientDetails extends Component {
	render() {
		const { cliendDetails } = this.props;
		let caseDetails = cliendDetails.caseDetails;
		let schedule = cliendDetails.schedule;
		let notes = cliendDetails.notes;
		console.log(schedule);
		return (
			<Tabs defaultActiveKey='1'>
				<TabPane
					tab={
						<span>
							<Icon type='apple' />
							Basic Information
						</span>
					}
					key='1'
				>
					<ul className='details-ul'>
						<li className='details-li'>
							<Row>
								<Col span={12}>
									<span className='text-bold'>Name</span>
								</Col>
								<Col span={12}>{cliendDetails.name}</Col>
							</Row>
						</li>
						<li className='details-li'>
							<Row>
								<Col span={12}>
									<span className='text-bold'>Contact Number</span>
								</Col>
								<Col span={12}>{cliendDetails.phone}</Col>
							</Row>
						</li>
						<li className='details-li'>
							<Row>
								<Col span={12}>
									<span className='text-bold'>Email</span>
								</Col>
								<Col span={12}>{cliendDetails.email}</Col>
							</Row>
						</li>
						<li className='details-li'>
							<Row>
								<Col span={12}>
									<span className='text-bold'>Address</span>
								</Col>
								<Col span={12}>{cliendDetails.address}</Col>
							</Row>
						</li>
						<li className='details-li'>
							<Row>
								<Col span={12}>
									<span className='text-bold'>City</span>
								</Col>
								<Col span={12}>{cliendDetails.city}</Col>
							</Row>
						</li>
						<li className='details-li'>
							<Row>
								<Col span={12}>
									<span className='text-bold'>Remark</span>
								</Col>
								<Col span={12}>{cliendDetails.remark}</Col>
							</Row>
						</li>
					</ul>
				</TabPane>
				<TabPane
					tab={
						<span>
							<Icon type='android' />
							Case
						</span>
					}
					key='2'
				>
					<Collapse accordion>
						{caseDetails.map((c, id) => (
							<Panel header={c.caseName} key={id}>
								<ul className='details-ul'>
									<li className='details-li'>
										<Row>
											<Col span={12}>
												<span className='text-bold'>Case Name</span>
											</Col>
											<Col span={12}>{c.caseName}</Col>
										</Row>
									</li>
									<li className='details-li'>
										<Row>
											<Col span={12}>
												<span className='text-bold'>Case Number</span>
											</Col>
											<Col span={12}>{c.caseNumber}</Col>
										</Row>
									</li>
									<li className='details-li'>
										<Row>
											<Col span={12}>
												<span className='text-bold'>Client Name</span>
											</Col>
											<Col span={12}>{c.client}</Col>
										</Row>
									</li>
									<li className='details-li'>
										<Row>
											<Col span={12}>
												<span className='text-bold'>Case Date</span>
											</Col>
											<Col span={12}>{c.caseDate}</Col>
										</Row>
									</li>
									<li className='details-li'>
										<Row>
											<Col span={12}>
												<span className='text-bold'>Status</span>
											</Col>
											<Col span={12}>{c.status}</Col>
										</Row>
									</li>
								</ul>
							</Panel>
						))}
					</Collapse>
				</TabPane>
				<TabPane
					tab={
						<span>
							<Icon type='android' />
							Schedules
						</span>
					}
					key='3'
				>
					<Collapse accordion>
						{schedule.map((c, id) => (
							<Panel header={c.type} key={id}>
								<ul className='details-ul'>
									<li className='details-li'>
										<Row>
											<Col span={12}>
												<span className='text-bold'>Schedule Type</span>
											</Col>
											<Col span={12}>{c.type}</Col>
										</Row>
									</li>
									<li className='details-li'>
										<Row>
											<Col span={12}>
												<span className='text-bold'>Schedule Title</span>
											</Col>
											<Col span={12}>{c.title}</Col>
										</Row>
									</li>
									<li className='details-li'>
										<Row>
											<Col span={12}>
												<span className='text-bold'>Schedule Date & Time</span>
											</Col>
											<Col span={12}>{c.dateTime}</Col>
										</Row>
									</li>
								</ul>
							</Panel>
						))}
					</Collapse>
				</TabPane>
				<TabPane
					tab={
						<span>
							<Icon type='android' />
							Notes
						</span>
					}
					key='4'
				>
					<Collapse accordion>
						{notes.map((c, id) => (
							<Panel header={c.type} key={id}>
								<ul className='details-ul'>
									<li className='details-li'>
										<Row>
											<Col span={12}>
												<span className='text-bold'>Schedule Type</span>
											</Col>
											<Col span={12}>{c.type}</Col>
										</Row>
									</li>
									<li className='details-li'>
										<Row>
											<Col span={12}>
												<span className='text-bold'>Schedule Title</span>
											</Col>
											<Col span={12}>{c.title}</Col>
										</Row>
									</li>
									<li className='details-li'>
										<Row>
											<Col span={12}>
												<span className='text-bold'>Schedule Date & Time</span>
											</Col>
											<Col span={12}>{c.dateTime}</Col>
										</Row>
									</li>
									<li className='details-li'>
										<Row>
											<Col span={12}>
												<span className='text-bold'>Client</span>
											</Col>
											<Col span={12}>{c.client}</Col>
										</Row>
									</li>
								</ul>
							</Panel>
						))}
					</Collapse>
				</TabPane>
			</Tabs>
		);
	}
}

export default ClientDetails;
