import React from 'react';
import { Layout } from 'antd';

import HeaderComponent from './header/header';
import FooterComponent from './footer/footer';
import SiderComponent from './sidebar/sidebar';
import RouterLink from '../router/router';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const newHistory = createBrowserHistory();
const { Content } = Layout;

export default class AdminPanelLayout extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      collapsed: false,
      collapsedNot: false,
      signIn: false
    };
  }

  updateCollapsed(name, value) {
    this.setState({ [name]: value });
  }
  handleResize = () => {
    let windowSize = window.innerWidth;
    if (windowSize <= 981) windowSize = 768;
    const thumbWidth = windowSize <= 768;
    if (thumbWidth) {
      const mobileView = 'mobile';
      this.setState({ view: mobileView, collapsed: false });
    }
    if (!thumbWidth) {
      const desktopView = 'dextop';
      this.setState({ view: desktopView });
    }
    this.setState(prevState => {
      return {
        windowSize,
        thumbWidth
      };
    });
  };
  componentDidMount() {
    // console.log("Url :" + window.location.pathname);
    window.addEventListener('resize', this.handleResize);
    let windowSize = window.innerWidth;
    if (windowSize <= 981) windowSize = 768;
    const thumbWidth = windowSize <= 768;
    if (thumbWidth) {
      const mobileView = 'mobile';
      this.setState({ view: mobileView, collapsed: false });
    }
    if (!thumbWidth) {
      const desktopView = 'dextop';
      this.setState({ view: desktopView });
    }

    this.setState(prevState => {
      return {
        windowSize,
        thumbWidth
      };
    });
  }

  componentWillMount() {
    window.removeEventListener('resize', this.handleResize);

    let windowSize = window.innerWidth;
    if (windowSize <= 981) windowSize = 768;
    const thumbWidth = windowSize <= 768;
    if (thumbWidth) {
      const mobileView = 'mobile';
      this.setState({ view: mobileView, collapsed: false });
    }
    if (!thumbWidth) {
      const desktopView = 'dextop';
      this.setState({ view: desktopView });
    }
    this.setState(prevState => {
      return {
        windowSize,
        thumbWidth
      };
    });
  }
  maskCollapsedClick = () => {
    this.setState({ collapsedNot: false });
  };
  render() {
    const { view, thumbWidth, collapsedNot, windowSize } = this.state;
    //console.log(windowSize)
    let sideShow = '';
    let mask = false;
    if (collapsedNot || thumbWidth) {
      sideShow = 'sidebar-show';
    }
    if (collapsedNot && thumbWidth) {
      mask = true;
    }
    if (!collapsedNot && thumbWidth) {
      sideShow = 'sidebar-hidden ';
      mask = false;
    }
    return (
      <div className={view}>
         <Router history={newHistory}>
        <Layout>
          <SiderComponent
            windowsize={this.state.thumbWidth}
            collapsed={this.state.collapsed}
            collapsedNot={this.state.collapsedNot}
            sideShow={sideShow}
            url={window.location.pathname}
          />
          <div
            onClick={this.maskCollapsedClick}
            className={mask ? 'mask-design' : null}
          />
          <Layout className='mainwrap'>
            <HeaderComponent
              windowsize={this.state.thumbWidth}
              collapsed={this.state.collapsed}
              collapsedNot={this.state.collapsedNot}
              updateCollapsed={this.updateCollapsed.bind(this)}
            />
            <Content className='content-custom'>
              {/* <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb> */}
              {/* <div>{this.props.content}</div> */}
              <RouterLink />
            </Content>
            {/* <FooterComponent /> */}
          </Layout>
        </Layout>
        </Router>
      </div>
    );
  }
}
