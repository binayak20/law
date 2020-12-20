/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Drawer, Card, Button } from 'antd';
import moment from 'moment';
import { Meteor } from 'meteor/meteor';

const { Meta } = Card;
class Notification extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	onClose = () => {
		this.props.updateState('visible', !this.props.visibility);
	};
	goToNotification = () => {
		window.location.href = '/notification';
		localStorage.setItem('currentSelect', JSON.stringify('-1'));
	};
	markNotificationAsRead = (id, pId) => {
		Meteor.call('markNotificationAsRead', id, (err, res) => {
			console.log(err, res);
			if (err) {
				alert(
					'Failed to fetch project at this moment. Please try again later.'
				);
				window.location.href = '/projects-details/' + pId;
			} else if (res) {
				//this.setState({ ...res, isDataFetched: true })
				window.location.href = '/projects-details/' + pId;
			}
			// window.location.href = '/projects-details/'+pId;
		});
	};
	render() {
		const { notifications } = this.props;
		const notificationList = notifications.map((value, index) => (
			<a
				href='#'
				onClick={() => this.markNotificationAsRead(value._id, value.project_id)}
				key={index}
			>
				<Card
					key={index}
					style={{ background: value.unread ? '#edf2fa' : '#fbfbfb' }}
					className={
						value.type === 'comment'
							? 'drawer-card notification-wrap success'
							: 'drawer-card notification-wrap info'
					}
					hoverable
				>
					<Meta
						style={{ width: 313 }}
						title={
							<div className='notification-name' style={{ fontSize: 15 }}>
								<span style={{ fontWeight: 'bold' }}>
									{value.commenterName}
								</span>
								{' is ' + value.type + ' From '}
								<span style={{ fontWeight: 'bold' }}>
									{value.projectName ? value.projectName : 'Poject Name Here'}
								</span>
							</div>
						}
						description={
							<div className='notification-date'>
								<i className='fa fa-clock-o' />{' '}
								{moment(value.createdAt).fromNow()}
							</div>
						}
					/>
				</Card>
			</a>
		));
		return (
			<Drawer
				closable
				width={340}
				title='Notification List'
				placement='right'
				onClose={this.onClose}
				visible={this.props.visibility}
				className='drawer-custom'
			>
				{notificationList}
				{/* {notifications.map((value, index) => { */}

				{/* })} */}

				{/* <Card className="drawer-card notification-wrap warning" hoverable>
          <Meta
            style={{ width: 313 }}
            title={
              <div>
                <div className="notification-name" style={{ fontSize: 15 }}>
                  Md. Nur Mohamad Shaon
                </div>
                <div className="notification-date">
                  <i className="fa fa-clock-o" /> {moment().fromNow()}
                </div>
              </div>
            }
            description="This is the description This is the description This is the description This is the description"
          />
        </Card>
        <Card className="drawer-card notification-wrap info" hoverable >
          <Meta
            style={{ width: 313 }}
            title={
              <div>
                <div className="notification-name" style={{ fontSize: 15 }}>
                  Md. Mostafizur Rahaman
                </div>
                <div className="notification-date"><i className="fa fa-clock-o" /> {moment().fromNow()}</div>
              </div>
            }
            description="This is the description This is the description"
          />
        </Card> */}
				<div style={{ textAlign: 'center', margin: 10 }}>
					<Button
						onClick={this.goToNotification}
						size='small'
						style={{ background: '#315e73', color: '#fff' }}
					>
						See All
					</Button>
				</div>
			</Drawer>
		);
	}
}

export default Notification;
