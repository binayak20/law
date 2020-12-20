import React, { Component } from 'react';
import { Modal } from 'antd';
import ScheduleForm from './ScheduleForm';
import ScheduleDetails from './ScheduleDetails';
// import ClientForm from "./ClientForm";
// import ClientDetails from "./ClientDetails";

class ScheduleModal extends Component {
	handleCancel = () => {
		this.props.updateState('visible', false);
		this.props.updateState('scheduleData', undefined);
	};
	updateState(name, value) {
		this.props.updateState([name], value);
	}
	render() {
		const { visible, scheduleDetails } = this.props;
		return (
			<div>
				<Modal
					title={
						<div style={{ textAlign: 'center' }}>
							{scheduleDetails ? scheduleDetails.title : 'New Schedule'}
						</div>
					}
					visible={visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					footer={null}
					width={500}
				>
					{scheduleDetails ? (
						<ScheduleDetails scheduleDetails={scheduleDetails} />
					) : (
						<ScheduleForm
							updateState={this.updateState.bind(this)}
							visible={visible}
						/>
					)}
				</Modal>
			</div>
		);
	}
}

export default ScheduleModal;
