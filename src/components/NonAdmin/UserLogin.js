import React, { Component } from 'react';
import './Login.css';

import { connect } from 'react-redux';
import { loginUser } from '../../actions/loginAction';
import  { withRouter } from 'react-router-dom';

class UserLogin extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}

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
						<h1>Discord OAuth</h1>
					</div>

					<div className="content">
                        <a href="https://apiup.ankuranant.me/api/user/login"><button id="loButton" type="submit" className="btn btn-primary">Login with Discord</button></a>
					</div>
				</div>
			</div>

		);
	}
}

export default withRouter(connect(null, {loginUser})(UserLogin));
