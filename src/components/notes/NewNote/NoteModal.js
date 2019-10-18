import React, { Component } from "react";
import { Modal, Button } from "antd";
import NoteForm from "./NoteForm";
import NoteDetails from "../NoteDetails/NoteDetails";

class NoteModal extends Component {
  handleCancel = () => {
    this.props.updateState("visible", false);
    this.props.updateState("noteData", undefined);
  };
  updateState(name, value) {
    this.props.updateState([name], value);
  }
  render() {
    const { visible, noteDetails } = this.props;
    return (
      <div>
        <Modal
          title={
            <div style={{ textAlign: "center" }}>
              {noteDetails ? noteDetails.title : "New Note"}
            </div>
          }
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          width={500}
        >
           {noteDetails ? (
            <NoteDetails noteDetails={noteDetails} />
          ) : (
            <NoteForm updateState={this.updateState.bind(this)} visible={visible}/>
          )} 
        </Modal>
      </div>
    );
  }
}

export default NoteModal;
