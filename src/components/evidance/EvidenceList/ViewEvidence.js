import React, { Component } from "react";
import { Modal, Button } from "antd";
import { Player, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";
class ViewEvidence extends Component {
  handleCancel = () => {
    this.props.updateState("visibleEvidence", false);
    this.props.updateState("evidence", null);
  };
  render() {
    const { visibleEvidence, evidence, evidenceType } = this.props;
    console.log(evidence);
    return (
      <div>
        <Modal
          title={<div style={{ textAlign: "center" }}>Evidence</div>}
          visible={visibleEvidence}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
          style={{ width: "100%" }}
        >
          {evidence !== null && (evidenceType === 'video'||evidenceType === 'audio' ||evidenceType === 'others') && (
            <Player poster="poster.jpg" src={evidence}>
              <BigPlayButton position="center" />
            </Player>
          )}
          {evidenceType === 'image' &&
          <img style={{width:'100%'}} src="law.jpg" />
        }
        </Modal>
      </div>
    );
  }
}

export default ViewEvidence;
