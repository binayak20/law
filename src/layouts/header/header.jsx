/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import { Layout, Avatar, Row, Col, Icon, Menu, Dropdown } from 'antd';
//import { version } from '../../../const'

const { Header } = Layout;

export default class HeaderComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	signOutFuntion = () => {
		localStorage.setItem('currentSelect', JSON.stringify('1'));
		// Meteor.logout(() => (document.location.href = '/'));
	};
	toggle = () => {
		this.props.updateCollapsed('collapsed', !this.props.collapsed);
	};
	toggleNot = () => {
		this.props.updateCollapsed('collapsedNot', !this.props.collapsedNot);
	};
	clickUserProfile = () => {
		window.location.href = '/user-profile';
		localStorage.setItem('currentSelect', JSON.stringify('-1'));
	};
	render() {
		// const { user } = this.state;
		const menu = (
			<Menu className='header-dropdown'>
				<Menu.Item key='0'>
					<Icon type='profile' />
					{/* <a onClick={this.clickUserProfile}>Profile</a> */}
					Profile
				</Menu.Item>
				<Menu.Item key='1'>
					<Icon type='info' />
					Version: 001
				</Menu.Item>
				<Menu.Item key='2'>
					<Icon type='poweroff' />
					Sign out
				</Menu.Item>
			</Menu>
		);
		return (
			<Header className='header-design'>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css'
				/>
				<Row>
					<Col
						xs={this.props.collapsed ? 5 : 6}
						sm={15}
						md={17}
						lg={17}
						xl={18}
					>
						<Icon
							className={this.props.collapsed ? 'trigger-collapse' : 'trigger'}
							type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
							onClick={!this.props.windowsize ? this.toggle : this.toggleNot}
							style={{ color: '#fff', marginLeft: 5 }}
						/>
					</Col>

					<Col
						style={{ textAlign: 'center' }}
						xs={this.props.collapsed ? 19 : 18}
						sm={9}
						md={7}
						lg={7}
						xl={6}
					>
						<div style={{ float: 'right', marginRight: 10 }}>
							<span style={{ color: '#fff' }}>
								<Avatar
									style={{ marginRight: 5, backgroundColor: '#87d068' }}
									size={35}
									src='/profile.jpg'
								/>
								<Dropdown
									overlay={menu}
									trigger={['click']}
									placement='bottomLeft'
								>
									<span className='admin-dropdown'>
										Binayak Ray
										<Icon type='down' />
									</span>
								</Dropdown>
							</span>

							<span style={{ marginLeft: 20 }}>
								<a
									href='#'
									className='head-example'
									onClick={this.showDrawer}
								/>
							</span>
						</div>
					</Col>
				</Row>
			</Header>
		);
	}
}
