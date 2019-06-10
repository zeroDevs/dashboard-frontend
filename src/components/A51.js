import React, { Component } from 'react';
import './Login/Login.css';

import { connect } from 'react-redux';
import { preSignup, userSignup } from '../actions/signupAction';
import  { withRouter } from 'react-router-dom';

class A51 extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			token: '',
            password: '',
            passwordCheck: ''
		}

		this.onChange = this.onChange.bind(this);
		this.onSignupVerify = this.onSignupVerify.bind(this);
        this.onSignup = this.onSignup.bind(this);
		this.handleRedirect = this.handleRedirect.bind(this);
	}

	onSignupVerify = (event) => {
		event.preventDefault();

		const tData = {
			username: this.state.username,
			token: this.state.token
		}
        document.getElementById("username").value = "";
        document.getElementById("token").value = "";
		this.props.preSignup(tData);
	}

    onSignup = (event) => {
        event.preventDefault();

        const userData = {
            password: this.state.password
        }

        if(this.state.password === this.state.passwordCheck) {
            let signUpToken = localStorage.getItem("signUpToken");
            this.props.userSignup(userData, signUpToken, this.handleRedirect);
        } else {
            let objTo = document.getElementById('suForm');
            let h1 = document.createElement("h4");
            h1.innerHTML = "Password doesn't match";
            h1.style.color = 'red';
            objTo.appendChild(h1);
        }
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
			{
                this.props.tokVer
                    ?
                        (
                				<div className="login-card">

                					<div className="card-title" id="suHeader">
                						<h1>SignUp</h1>
                					</div>

                					<div className="content">
                						<form id="suForm" method='POST' onSubmit={this.onSignup}>

                							<input id="password" type="password" name="password" title="password" placeholder={"Password"} required onChange={this.onChange} />
                							<input id="passwordCheck" type="password" name="passwordCheck" title="passwordCheck" placeholder={"Type password again"} required onChange={this.onChange} />

                							<div className="level options">
                								<div className="checkbox level-left">
                									<input type="checkbox" id="checkbox" className="regular-checkbox" />
                									<label htmlFor="checkbox"></label>
                									<span>Remember me(doesnt work 😉)</span>
                								</div>

                								<a className="btn btn-link level-right" href="#">Forgot Password?</a>
                							</div>

                							<button type="submit" className="btn btn-primary">Login</button>
                						</form>
                					</div>
                				</div>
                        )
                    :
                        (
                				<div className="login-card">

                					<div className="card-title" id="suHeader">
                						<h1>Enter Token</h1>
                					</div>

                					<div className="content">
                						<form method='POST' onSubmit={this.onSignupVerify}>

                							<input id="username" type="text" name="username" title="username" placeholder={"Choose a Username"} required onChange={this.onChange} />
                							<input id="token" type="text" name="token" title="token" placeholder={"Token"} required onChange={this.onChange} />

                							<button type="submit" className="btn btn-primary">Login</button>
                						</form>
                					</div>
                				</div>
                        )
            }
            </div>

		);
	}
}

const mapStateToProps = state => ({
    tokVer: state.signup.tokVer,
    su: state.signup.su
});

export default withRouter(connect(mapStateToProps, {preSignup, userSignup})(A51));
