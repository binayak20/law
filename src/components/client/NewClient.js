import React, { Component } from "react";
import { Modal, Button } from "antd";
import ClientForm from "./ClientForm";
import ClientDetails from "./ClientDetails";

class NewClient extends Component {
  handleCancel = () => {
    this.props.updateState("visible", false);
    this.props.updateState("clientData", undefined);
  };
  updateState(name, value) {
    this.props.updateState([name], value);
  }
  render() {
    const {visible, cliendDetails} = this.props;
    return (
      <div>
        <Modal
          title={<div style={{textAlign:'center'}}>{cliendDetails?cliendDetails.name:'New Client'}</div>}
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width={600}
        >
          {cliendDetails ?
            <ClientDetails cliendDetails={cliendDetails}/>
            :
         <ClientForm updateState={this.updateState.bind(this)} visible={visible}/>
          }
        </Modal>
      </div>
    );
  }
}

export default NewClient;
