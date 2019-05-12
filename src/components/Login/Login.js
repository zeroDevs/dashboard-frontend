import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
	render() {
		return(
			
			<div id="login">
				<div className="login-card">

					<div className="card-title">
						<h1>Please Sign In</h1>
					</div>

					<div className="content">
						<form method="POST" action="#">

							<input id="email" type="email" name="email" title="email" placeholder={"Email"} required autoFocus />
							<input id="password" type="password" name="password" title="password" placeholder={"Password"} required />

							<div className="level options">
								<div className="checkbox level-left">
									<input type="checkbox" id="checkbox" className="regular-checkbox" />
									<label htmlFor="checkbox"></label>
									<span>Remember me</span>
								</div>

								<a className="btn btn-link level-right" href="#">Forgot Password?</a>
							</div>

							<button type="submit" className="btn btn-primary">Login</button>
						</form>
					</div>
				</div>
			</div>

		);
	}
}

export default Login;