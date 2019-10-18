import React, { Component } from "react";
import { Card, Table, Divider, Tag, Affix, Button, Icon, Popconfirm,message } from "antd";
import NewClient from "./NewClient";
function confirm(e) {
    console.log(e);
    message.success('Delete Successfully');
  }
  
  function cancel(e) {
    console.log(e);
    message.error('Click on No');
  }


const data = [
  {
    key: "1",
    name: "Madhury Mondal",
    phone: "01558903481",
    address: "Khulna, Bangladesh",
    city:"Khulna",
    email:"madhuryps@gmail.com",
    remark:"Good Client",
    caseDetails: [{
      key: "1",
      caseName:"Mr. Jhon Murdur Case",
      caseNumber:"001",
      client: "Madhury Mondal",
      caseDate:"10/3/2019",
      status:'Opend'
    }],
    schedule:[{
      key: "1",
      type:"Case Hearing",
      title:"Schedule Title",
      client: "Madhury Mondal",
      dateTime:"17/3/2019 12:29 PM",
    }],
    notes:[{
      key: "1",
      type:"Case",
      title:"Case Discusstion with Client",
      client: "Madhury Mondal",
      dateTime:"10/3/2019 12:29 AM",
    }]
  },
  {
    key: "2",
    name: "Binayak Ray",
    phone: "01517156603",
    address: "Dhaka, Bangladesh",
    city:"Dhaka",
    email:"csebinayak.ku@gmail.com",
    remark:"Good Client",
    caseDetails: [{
      key: "1",
      caseName:"Mr. Jhon Murdur Case",
      caseNumber:"001",
      client: "Binayak Ray",
      caseDate:"10/3/2019",
      status:'Opend'
    }],
    schedule:[{
      key: "1",
      type:"Case Hearing",
      title:"Schedule Title",
      client: "Binayak Ray",
      dateTime:"17/3/2019 12:29 PM",
    }],
    notes:[]
  },
  {
    key: "3",
    name: "Mithun Ray",
    phone: "01940523661",
    address: "Khulna, Bangladesh",
    city:"Dhaka",
    email:"mithub.ku@gmail.com",
    remark:"Good Client",
    caseDetails: [{
      key: "1",
      caseName:"Mr. Jhon Murdur Case",
      caseNumber:"001",
      client: "Mithum Ray",
      caseDate:"10/3/2019",
      status:'Opend'
    },{
      key: "2",
      caseName:"Mr. Jhon Murdur Case 2",
      caseNumber:"001",
      client: "Mithum Ray",
      caseDate:"10/3/2019",
      status:'Opend'
    }],
    schedule:[{
      key: "1",
      type:"Case Hearing",
      title:"Schedule Title",
      client: "Mithum Ray",
      dateTime:"17/3/2019 12:29 PM",
    }],
    notes:[]
  }
];
class Client extends Component {
  state = {
    visible: false
  };
  addClient=()=> {
    this.setState({ visible: true });
  }
  updateState(name, value) {
    this.setState({ [name]: value });
  }
  viewClientDetails(record){
    console.log(record)
    this.setState({
      clientData:record,
      visible: true
    })
  }
  render() {
    const { visible,clientData } = this.state;
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text, record) => <a className="href-tag" onClick={()=>this.viewClientDetails(record)}>{text}</a>
      },
      {
        title: "Phone",
        dataIndex: "phone",
        key: "phone"
      },
      {
        title: "Address",
        dataIndex: "address",
        key: "address"
      },
    
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <Icon type="edit" style={{color:'green', fontWeight:'bold', cursor:'pointer'}} />
            <Divider type="vertical" />
            
            <Popconfirm
                title="Are you sure delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
            >
                <Icon type="close-square" style={{color:'red', fontWeight:'bold', cursor:'pointer'}} />
            </Popconfirm>
          </span>
        )
      }
    ];
    return (
      <Card>
        <NewClient
          updateState={this.updateState.bind(this)}
          visible={visible}
          cliendDetails={clientData}
        />
        <Affix className="FAB">
          <Button
            className="affix-button"
            shape="circle"
            size="large"
            onClick={this.addClient}
            icon="plus"
          />
        </Affix>
        <h2>Client List</h2>
        <Table columns={columns} dataSource={data} />
      </Card>
    );
  }
}

export default Client;
