import React, { Component } from "react";
import { Tabs, Input, Card, PageHeader } from "antd";
import Chapters from "./Chapters";
import Sections from "./Sections";
const { Search } = Input;

const { TabPane } = Tabs;
class BookDetails extends Component {
  state = {
    chapterSection: false
  };
  updateState(name, value) {
    this.setState({ [name]: value });
  }
  render() {
    return (
      <Card>
        {/* <div className="card-container"> */}
        <div className="search-div">
          <PageHeader onBack={() => null} title="Book Name Here" />
          <Search
            placeholder="Search With Any Text"
            onSearch={value => console.log(value)}
            style={{ width: "50%" }}
          />
        </div>
        <Tabs type="card">
          <TabPane tab="Chapters" key="1">
            <Chapters />
          </TabPane>
          <TabPane tab="Sections" key="2">
            <Sections />
          </TabPane>
          {/* <TabPane tab="Chapter Sections" key="3">
            <Sections />
          </TabPane> */}
        </Tabs>
        {/* </div> */}
      </Card>
    );
  }
}

export default BookDetails;
