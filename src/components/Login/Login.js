import React, { Component } from 'react';
import './Login.css';

import { connect } from 'react-redux';
import { loginUser } from '../../actions/loginAction';
import  { withRouter } from 'react-router-dom';

class Login extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.handleRedirect = this.handleRedirect.bind(this);
	}

	onSubmit = (event) => {
		event.preventDefault();

		const loginData = {
			username: this.state.username,
			password: this.state.password
		}

		//loading
		let element = document.getElementById("loButton");
  		element.classList.add("button", "is-loading");

		this.props.loginUser(loginData, this.handleRedirect)
	}

	onChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	}

	handleRedirect = (path) => {
		this.props.history.push("/"+path);
	}

	render() {
		return(

			<div id="login">
				<div className="login-card">

					<div className="card-title">
						<h1>Please Sign In</h1>
					</div>

					<div className="content">
						<form method='POST' onSubmit={this.onSubmit}>

							<input id="username" type="text" name="username" title="username" placeholder={"Username"} required onChange={this.onChange} />
							<input id="password" type="password" name="password" title="password" placeholder={"Password"} required onChange={this.onChange} />

							<div className="level options">
								<div className="checkbox level-left">
									<input type="checkbox" id="checkbox" className="regular-checkbox" />
									<label htmlFor="checkbox"></label>
									<span>Remember me</span>
								</div>

								<a className="btn btn-link level-right" href="#">Forgot Password?</a>
							</div>

							<button id="loButton" type="submit" className="btn btn-primary">Login</button>
						</form>
					</div>
				</div>
			</div>

		);
	}
}

export default withRouter(connect(null, {loginUser})(Login));
