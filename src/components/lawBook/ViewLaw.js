import React, { Component } from 'react';
import { Modal } from 'antd';
class ViewLaw extends Component {
    handleCancel=e=>{
        this.props.updateState('visible', false)
    }
    render() {
        const lawData = this.props.lawData;
        return (
            <Modal
                title={lawData.title}
                visible={this.props.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={null}
            >
            <p>{lawData?lawData.law:''}</p>
            
          </Modal>
        );
    }
}

export default ViewLaw;