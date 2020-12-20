import React, { Component } from 'react';
import { List, Avatar } from 'antd';

const data = [
	{
		title: "Chapter I (The Public Accountant's Default Act, 1850)",
	},
	{
		title: "Chapter II (The Judicial Officer's Protection Act, 1850)",
	},
	{
		title: 'Chapter III (The Public Servants (Inquiries) Act, 1850) ',
	},
	{
		title: 'Chapter IV (The Tolls Act, 1851) ',
	},
];
class Chapters extends Component {
	render() {
		return (
			<List
				itemLayout='horizontal'
				dataSource={data}
				renderItem={(item) => (
					<List.Item>
						<List.Item.Meta
							avatar={<Avatar src='chapter.png' />}
							title={<a href='#'>{item.title}</a>}
							description='SECTION 1 TO 5'
						/>
					</List.Item>
				)}
			/>
		);
	}
}

export default Chapters;
