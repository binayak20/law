import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { sideLinkData, sideLinkDataNotSe } from './menuData';

const { Sider } = Layout;

export default class SiderComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: '',
			current1: JSON.parse(localStorage.getItem('currentSelect')) || '1',
		};
	}
	componentDidMount() {
		if (this.props.url === '/dashboard') {
			this.setState({ current: '1' });
			localStorage.setItem('currentSelect', JSON.stringify('1'));
		}
		if (this.props.url === '/books') {
			this.setState({ current: '2' });
			localStorage.setItem('currentSelect', JSON.stringify('2'));
		}
		if (this.props.url === '/clients') {
			this.setState({ current: '3' });
			localStorage.setItem('currentSelect', JSON.stringify('3'));
		}
		if (this.props.url === '/cases') {
			this.setState({ current: '4' });
			localStorage.setItem('currentSelect', JSON.stringify('4'));
		}
		if (this.props.url === '/schedules') {
			this.setState({ current: '5' });
			localStorage.setItem('currentSelect', JSON.stringify('5'));
		}
		if (this.props.url === '/evidence') {
			this.setState({ current: '6' });
			localStorage.setItem('currentSelect', JSON.stringify('6'));
		}
		if (this.props.url === '/notes') {
			this.setState({ current: '7' });
			localStorage.setItem('currentSelect', JSON.stringify('7'));
		}
		if (this.props.url === '/calender') {
			this.setState({ current: '8' });
			localStorage.setItem('currentSelect', JSON.stringify('8'));
		}
		if (this.props.url === '/settings') {
			this.setState({ current: '9' });
			localStorage.setItem('currentSelect', JSON.stringify('9'));
		}
	}

	handleClick = (e) => {
		console.log(e);
		this.setState({ current: e.key });
		if (e.key === '10') {
			localStorage.setItem('currentSelect', JSON.stringify('1'));
		} else {
			localStorage.setItem('currentSelect', JSON.stringify(e.key));
		}
	};
	clickLogo = () => {
		this.setState({ current: '1' });
		localStorage.setItem('currentSelect', JSON.stringify('1'));
	};
	signOutFuntion = () => {
		// console.log('logout')
		localStorage.setItem('currentSelect', JSON.stringify('-1'));
		// Meteor.logout(() => (document.location.href = '/'));
	};
	render() {
		// const { user } = this.state;
		// console.log(user);
		let sideData = {};
		sideData = sideLinkData;
		return (
			<div>
				<Sider
					trigger={null}
					collapsible
					collapsed={this.props.collapsed}
					className={this.props.sideShow}
					style={{ backgroundImage: `url(/Stadiyum Assets/Assets/side.jpg)` }}
				>
					<a onClick={this.clickLogo} href='/dashboard'>
						<div className='sidebar-top'>
							<img
								alt='logo'
								width={this.props.collapsed ? 100 : 130}
								height={100}
								src='/Stadiyum Assets/Assets/law-2.png'
							/>
						</div>
					</a>
					<Menu
						selectedKeys={
							this.state.current ? [this.state.current] : [this.state.current1]
						}
						onClick={this.handleClick}
						mode='inline'
					>
						{sideData ? (
							sideData.map((side) => (
								<Menu.Item
									key={side.key}
									onClick={side.key === '10' ? this.signOutFuntion : null}
								>
									<a href={side.route}>
										{side.icon && <Icon type={side.icon} />}
										<span>{side.name}</span>
									</a>
								</Menu.Item>
							))
						) : (
							<div>Loading...</div>
						)}
					</Menu>
				</Sider>
			</div>
		);
	}
}
