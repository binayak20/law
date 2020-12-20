import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import ViewLaw from './ViewLaw';
import { lawInfo } from '../../const';
class Sections extends Component {
	state = { visible: false };
	getLaw = (item) => {
		this.setState({
			visible: true,
			lawData: item,
		});
		console.log(item);
	};
	updateState(name, value) {
		this.setState({ [name]: value });
	}
	render() {
		const { visible, lawData } = this.state;
		return (
			<div>
				{visible && (
					<ViewLaw
						visible={visible}
						lawData={lawData}
						updateState={this.updateState.bind(this)}
					/>
				)}
				<List
					itemLayout='horizontal'
					dataSource={lawInfo}
					renderItem={(item, index) => (
						<List.Item>
							<List.Item.Meta
								avatar={<Avatar src='section.jpg' />}
								title={
									<a href='#' onClick={() => this.getLaw(item)}>
										{item.no}
									</a>
								}
								description={`(${index + 1})${item.title} `}
							/>
						</List.Item>
					)}
				/>
			</div>
		);
	}
}

export default Sections;
