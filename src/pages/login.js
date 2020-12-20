import React from 'react';

import { FlowRouter } from 'meteor/kadira:flow-router';
import { Button, Row, Col, Form, Input } from 'antd';
import './style.css';
export default class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	handleSubmit = () => {
		const { username, password } = this.state;
		console.log(username, password);
		Meteor.loginWithPassword(
			{ username: username },
			password,
			(error, success) => {
				if (error) {
					console.log('error', error);
					alert(error.message);
				} else {
					FlowRouter.go('/dashboard');
				}
			}
		);
	};

	render() {
		return (
			<Row>
				<Col span={24}>
					<div className='sign-wrap'>
						<div
							className='full-height height-100 signup-bg pdd-horizon-70'
							style={{ background: '#FF4757' }}
						>
							<div className='vertical-align full-height p-relative'>
								<div className='logoarea'>
									<div className='row'>
										<div className='mr-auto ml-auto col-md-10'>
											<div className='text-right'>
												<img
													className='img-responsive mrg-left-auto mrg-btm-15 logo'
													src='Stadiyum Assets/Assets/stadiyum 3.png'
													alt='Stadiyum Logo'
													width='170'
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='full-height height-100 signup-form pdd-horizon-70'>
							<div className='vertical-align full-height p-relative'>
								<div className='boxmiddle'>
									<img
										className='img-responsive mrg-left-auto mrg-btm-15 logo-sm'
										src='images/whole.png'
										alt=''
										width='170'
									/>
									<Form className='signupform'>
										<div className='form-group'>
											<label className='text-normal text-dark'>
												<span className='required'>*</span>Admin ID:
											</label>
											<Input
												onChange={(e) =>
													this.setState({ username: e.target.value })
												}
												type='text'
												className='form-control'
											/>
										</div>

										<div className='form-group'>
											<label className='text-normal text-dark'>
												<span className='required'>*</span>Password:
											</label>
											<Input
												type='password'
												className='form-control'
												placeholder='Password'
												onChange={(e) =>
													this.setState({ password: e.target.value })
												}
											/>
										</div>

										<div className='form-group'>
											{/* <Link to="/dashboard"> */}
											<Button
												style={{ background: '#FF4757' }}
												block
												type='primary'
												className='btn btn-info btn-block border-radius-6'
												onClick={this.handleSubmit}
											>
												Log In
											</Button>
											{/* </Link> */}
											<p style={{ textAlign: 'center' }}>
												<small>
													<a href='#'>Forget Password</a>
												</small>
											</p>
										</div>
									</Form>
								</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		);
	}
}
