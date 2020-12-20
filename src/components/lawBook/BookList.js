/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Row, Col, Card, List, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { category, bookData } from '../../const';
const { Meta } = Card;

class BookList extends Component {
	state = {
		bookList: [],
	};
	componentDidMount() {
		this.setState({ bookList: bookData[0].book, markId: bookData[0].catId });
	}
	getCategory() {
		const listItems = category.map((cat) => (
			<li key={cat}>
				<a href='#'>{cat}</a>
			</li>
		));
		return listItems;
	}
	clickCategory = (item) => {
		let list = bookData.find((element) => {
			if (element.catId === item) {
				return element.book;
			}
		});
		this.setState({ bookList: list.book, markId: list.catId });
		//  console.log(bookList)
	};
	render() {
		const { bookList, markId } = this.state;
		console.log(bookList);
		return (
			<div>
				<Row>
					<Col span={6}>
						{/* {this.getCategory()} */}
						{/* <h3 style={{ marginBottom: 16 }}>Default Size</h3> */}
						<List
							header={<h3>Type of Laws</h3>}
							// footer={<div>Footer</div>}
							bordered={false}
							dataSource={category}
							renderItem={(item, index) => {
								return (
									<List.Item>
										<Typography.Text mark={index === markId}>
											{index + 1}.{' '}
										</Typography.Text>
										<a href='#' onClick={() => this.clickCategory(index)}>
											{item}
										</a>
									</List.Item>
								);
							}}
						/>
					</Col>
					<Col span={18}>
						<Row gutter={16}>
							{bookList.map((key, index) => (
								<Col span={6} key={index}>
									<Link to='/chapter-section'>
										<Card
											style={{ width: 180, marginBottom: 20 }}
											hoverable
											className='book-list-card'
											cover={
												<img
													alt='example'
													src='Stadiyum Assets/Assets/AL.jpg'
													height={150}
													width={180}
												/>
											}
										>
											<Meta
												title='The Book Of the law'
												description='This is the description'
											/>
										</Card>
									</Link>
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}

export default BookList;
