import React, { Component } from 'react';
import RTChart from 'react-rt-chart';
import socketIOClient from "socket.io-client";
import '../c3.css';
import './Dashboard/Dashboard.css';

class Chart extends Component {

	constructor() {
		super();
		this.state = {
			serverData: [{status: 0, lat: 0}, {status: 0, lat: 0}]
		}
	}

	componentDidMount() {
		// setInterval(() => this.forceUpdate(), 30000);
		const socket = socketIOClient("ws://apiup.ankuranant.me/", {transports: ['polling']});
		socket.on("FromAPI", data => {
			console.log(data);
			this.setState({serverData: data})
		});
		
	}

	render() {
		let data = {
			date: new Date(),
			zeroBot: (this.state.serverData[0].lat),
			devres: (this.state.serverData[1].lat)
		}

		return (
				<div>
					<RTChart
						fields={['zeroBot', 'devres']}
						data = {data}
						maxValues={50} /><br />

					<p className="title">Monitors</p>
					<table className="table is-fullwidth">
						<thead>
					    <tr>
					      	<th>Name</th>
					      	<th>Status</th>
					    </tr>
					  	</thead>
					  	<tbody>
					  		<tr>
					      		<th>
					      		{
					      			this.state.serverData[0].name === undefined
					      				? (
					      					<div className="balls">
											  	<div></div>
											  	<div></div>
											  	<div></div>
											</div>
					      					)
					      				: (
					      					this.state.serverData[0].name
					      					)
					      		}
					      		</th>
					      		<td>
					      			{
					      				this.state.serverData[0].status === 200
					      					? (
					      						<p className="has-text-success">
					      							<b>{this.state.serverData[0].status}</b>
					      						</p>
					      						)
					      					: (
					      						<p className="has-text-danger">
					      							<b>{this.state.serverData[0].status}</b>
					      						</p>
					      						)
					      			}
					      		</td>
					    	</tr>
					    	<tr>
					      		<th>
					      			{
						      			this.state.serverData[1].name === undefined
						      				? (
						      					<div className="balls">
												  	<div></div>
												  	<div></div>
												  	<div></div>
												</div>
						      					)
						      				: (
						      					this.state.serverData[1].name
						      					)
						      		}
				      			</th>
					      		<td>
					      			{
					      				this.state.serverData[1].status === 200
					      					? (
					      						<p className="has-text-success">
					      							<b>{this.state.serverData[1].status}</b>
					      						</p>
					      						)
					      					: (
					      						<p className="has-text-danger">
					      							<b>{this.state.serverData[1].status}</b>
					      						</p>
					      						)
					      			}
					      		</td>
					    	</tr>
					  	</tbody>
					</table>
				</div>
			);
	}
}

export default Chart;