import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export default class FooterComponent extends React.Component {
  render() {
    return (
      <Footer style={{ textAlign: "center" }}>
         PWD ©2019 Created by <a href="http://durbinlabs.com/">Durbin Labs Ltd.</a>
      </Footer>
    );
  }
}
