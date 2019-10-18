import React, { Component } from "react";
import { Modal, Button } from "antd";
import CaseForm from "./CaseForm";
import CaseDetails from "../CaseDetails/CaseDetails";

class NewCaseModal extends Component {
  handleCancel = () => {
    this.props.updateState("visible", false);
    this.props.updateState("caseDetails", undefined);
  };
  updateState(name, value) {
    this.props.updateState([name], value);
  }
  render() {
    const {visible, caseDetails} = this.props;
    return (
      <div>
        <Modal
          title={<div style={{textAlign:'center'}}>{caseDetails?caseDetails.caseName:'New Case'}</div>}
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width={600}
        >
          {caseDetails ?
            <CaseDetails caseDetails={caseDetails}/>
            :
         <CaseForm updateState={this.updateState.bind(this)} visible={visible}/>
          }
        </Modal>
      </div>
    );
  }
}

export default NewCaseModal;
