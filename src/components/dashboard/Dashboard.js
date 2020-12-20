import React from 'react';
import { Card, Row, Col, Statistic, Progress, Tag } from 'antd';
// import {
//     LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,ResponsiveContainer, RadialBarChart, RadialBar
// } from 'recharts';

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100
//   }
// ];
// const data1 = [
//   {
//     name: "18-24",
//     uv: 31.47,
//     pv: 2400,
//     fill: "#8884d8"
//   },
//   {
//     name: "25-29",
//     uv: 26.69,
//     pv: 4567,
//     fill: "#83a6ed"
//   },
//   {
//     name: "30-34",
//     uv: 15.69,
//     pv: 1398,
//     fill: "#8dd1e1"
//   },
//   {
//     name: "35-39",
//     uv: 8.22,
//     pv: 9800,
//     fill: "#82ca9d"
//   },
//   {
//     name: "40-49",
//     uv: 8.63,
//     pv: 3908,
//     fill: "#a4de6c"
//   },
//   {
//     name: "50+",
//     uv: 2.63,
//     pv: 4800,
//     fill: "#d0ed57"
//   },
//   {
//     name: "unknow",
//     uv: 6.67,
//     pv: 4800,
//     fill: "#ffc658"
//   }
// ];
const cardValue = [
	{
		name: 'Open Cases',
		value: 34,
		progress: 68,
		status: '#2db7f5',
	},
	{
		name: 'Schedule Today',
		value: 35,
		progress: 35,
		status: '#acaf01',
	},
	{
		name: 'Clients',
		value: 39,
		progress: 39,
		status: '#f50',
	},
	{
		name: 'Total Cases',
		value: 45,
		progress: 45,
		status: '#af6101',
	},
];
export default class Dashboard extends React.Component {
	state = {
		activeSale: 'Last 7 Years',
		bol7: true,
		dayCount: 7,
		salesData: [],
	};
	onChangeDay = (day, dayCount, bol7, bol15, bol30) => {
		console.log(day, bol7);
		this.setState({
			activeSale: day,
			dayCount: dayCount,
			bol7: bol7,
			bol15: bol15,
			bol30: bol30,
		});
		// let sales = [];
		// for (let i = 0; i < dayCount; i++) {
		//   sales.push({
		//     name: data[i] ? data[i].name : null,
		//     sale: data[i] ? data[i].sale : 0,
		//     date: data[i] ? data[i].date : null
		//   });
		// }
		// this.setState({ salesData: sales });
	};
	render() {
		// const { activeSale, bol7, bol15, bol30, salesData } = this.state;
		// const style = {
		//   top: 0,
		//   left: 350,
		//   lineHeight: "24px"
		// };
		return (
			<div>
				<Row gutter={16}>
					{cardValue.map((item, index) => (
						<Col span={6} key={index}>
							<Card hoverable bordered>
								<Row>
									<Col span={12}>
										<Progress
											width={70}
											type='circle'
											percent={item.progress}
											strokeColor={item.status}
										/>
									</Col>
									<Col span={12}>
										<Statistic title={item.name} value={item.value} />
									</Col>
								</Row>
							</Card>
						</Col>
					))}
				</Row>
			</div>
		);
	}
}
