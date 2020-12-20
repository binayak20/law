import React, { Component } from 'react';
import { Modal } from 'antd';
import EvidenceDetails from '../EvidenceDetails/EvidenceDetails';
import EvidenceForm from './EvidenceForm';
// import NoteForm from "./NoteForm";
// import evidenceDetails from "../evidenceDetails/evidenceDetails";

class EvidenceModal extends Component {
	handleCancel = () => {
		this.props.updateState('visible', false);
		this.props.updateState('evidenceData', undefined);
	};
	updateState(name, value) {
		this.props.updateState([name], value);
	}
	render() {
		const { visible, evidenceDetails } = this.props;
		return (
			<div>
				<Modal
					title={
						<div style={{ textAlign: 'center' }}>
							{evidenceDetails ? evidenceDetails.name : 'New Evidence'}
						</div>
					}
					visible={visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					footer={null}
					width={650}
				>
					{evidenceDetails ? (
						<EvidenceDetails evidenceDetails={evidenceDetails} />
					) : (
						<EvidenceForm
							updateState={this.updateState.bind(this)}
							visible={visible}
						/>
					)}
				</Modal>
			</div>
		);
	}
}

export default EvidenceModal;
