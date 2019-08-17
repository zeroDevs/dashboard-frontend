import React, { Component } from 'react';
import './AdminLogin/Login.css';

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

	}

	componentDidUpdate(prevProps) {
		console.log(this.props.tokVer.error === prevProps.tokVer.error);
		if(this.props.tokVer.error !== undefined) {
			if(this.props.tokVer.error !== prevProps.tokVer.error) {
				let tokForm = document.getElementById('suForm');
	            let tokenErr = document.createElement("h6");
	            tokenErr.innerHTML = `Error: ${this.props.tokVer.error}`;
	            tokenErr.style.color = 'red';
				tokenErr.setAttribute("id", "tokenErr");
				tokenErr.style.textAlign = 'center';
				tokForm.appendChild(document.createElement("br"));
	            tokForm.appendChild(tokenErr);

	            let tokenCode = document.createElement("h6");
	            tokenCode.innerHTML = `Code: ${this.props.tokVer.code}`;
	            tokenCode.style.color = 'red';
				tokenCode.setAttribute("id", "tokenCode");
				tokenCode.style.textAlign = 'center';
	            tokForm.appendChild(tokenCode);
			} else {
				let prevTokenErr = document.getElementById('tokenErr');
				prevTokenErr.innerHTML = `Error: ${this.props.tokVer.error}`;
				let prevTokenCode = document.getElementById('tokenCode');
				prevTokenCode.innerHTML = `Code: ${this.props.tokVer.code}`;
			}

			let verButton = document.getElementById("suVerButton");
			verButton.classList.remove("button", "is-loading");
		}

		if(this.props.su.error !== undefined) {
			if(this.props.su.error !== prevProps.su.error) {
				let suForm = document.getElementById('suForm');
	            let suErr = document.createElement("h6");
	            suErr.innerHTML = `Error: ${this.props.su.error}`;
	            suErr.style.color = 'red';
				suErr.setAttribute("id", "suErr");
				suErr.style.textAlign = 'center';
	            suForm.appendChild(suErr);

	            let suCode = document.createElement("h6");
	            suCode.innerHTML = `Code: ${this.props.su.code}`;
	            suCode.style.color = 'red';
				suCode.setAttribute("id", "suCode");
				suCode.style.textAlign = 'center';
	            suForm.appendChild(suCode);
			} else {
				let prevSuErr = document.getElementById('suErr');
				prevSuErr.innerHTML = `Error: ${this.props.su.error}`;
				let prevSuCode = document.getElementById('suCode');
				prevSuCode.innerHTML = `Code: ${this.props.su.code}`;
			}

			let signupButton = document.getElementById("suButton");
			signupButton.classList.remove("button", "is-loading");
		}
	}

	onSignupVerify = (event) => {
		event.preventDefault();

		const tData = {
			username: this.state.username,
			token: this.state.token
		}

        document.getElementById("username").value = "";
        document.getElementById("token").value = "";
		if(document.getElementById("tokenErr")) {
			let err = document.getElementById("tokenErr");
		    err.parentNode.removeChild(err);
			let code = document.getElementById("tokenCode");
		    code.parentNode.removeChild(code);
		}
		//loading
		let element = document.getElementById("suVerButton");
  		element.classList.add("button", "is-loading");



		console.log(this.props.tokVer.error);

		this.props.preSignup(tData);
	}

    onSignup = (event) => {
        event.preventDefault();

        const userData = {
            password: this.state.password
        }

		if(document.getElementById("tokenErr")) {
			let err = document.getElementById("tokenErr");
		    err.parentNode.removeChild(err);
			let code = document.getElementById("tokenCode");
		    code.parentNode.removeChild(code);
		}

        if(this.state.password === this.state.passwordCheck) {
			//loading
			let element = document.getElementById("suButton");
	  		element.classList.add("button", "is-loading");

			console.log(this.props.tokVer.error);

            let signUpToken = localStorage.getItem("signUpToken");
            this.props.userSignup(userData, signUpToken, this.handleRedirect);
        } else {
            let objTo = document.getElementById('suForm');
            let h4 = document.createElement("h4");
            h4.innerHTML = "Password doesn't match";
            h4.style.color = 'red';
			h4.style.textAlign = 'center';
            objTo.appendChild(h4);
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
                this.props.tokVer.tokVer
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
                							</div>

                							<button id="suButton" type="submit" className="btn btn-primary">Verify</button>
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
                						<form id="suForm" method='POST' onSubmit={this.onSignupVerify}>

                							<input id="username" type="text" name="username" title="username" placeholder={"Choose a Username"} required onChange={this.onChange} />
                							<input id="token" type="text" name="token" title="token" placeholder={"Token"} required onChange={this.onChange} />

                							<button id="suVerButton" type="submit" className="btn btn-primary">SignUp</button>
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
