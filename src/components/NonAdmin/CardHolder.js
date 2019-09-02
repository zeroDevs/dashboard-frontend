import React, { Component } from 'react';
import '../AdminLogin/Login.css';
import { connect } from 'react-redux';
import { ppform } from '../../actions/userAuthAction';

if(document.getElementById("subErr")) {
    let err = document.getElementById("subErr");
    err.parentNode.removeChild(err);
}


class CardHolder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            project: ''
        }
    }

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams.get('p'));
        switch(urlParams.get('p')) {
            case 'projpaycheck':
                this.setState({project: 'Project_Paycheck'});
                return;
            case 'projlive':
                this.setState({project: 'Project_Live'});
        }
    }

    componentDidUpdate(prevProps) {
        if(this.props.projPayForm !== null) {
            if(!this.props.projPayForm.isSubmitted) {
                let subForm = document.getElementById('subForm');
                let subErr = document.createElement("h6");
	            subErr.innerHTML = `Status: ${this.props.projPayForm.error}`;
	            subErr.style.color = 'red';
				subErr.setAttribute("id", "subErr");
				subErr.style.textAlign = 'center';
	            subForm.appendChild(subErr);
                //remove loading
                let element = document.getElementById("subButton");
                element.classList.remove("button", "is-loading");

            } else {
                let subForm = document.getElementById('subForm');
                let subErr = document.createElement("h6");
	            subErr.innerHTML = `Status: ${this.props.projPayForm.error}`;
	            subErr.style.color = 'green';
				subErr.setAttribute("id", "subErr");
				subErr.style.textAlign = 'center';
	            subForm.appendChild(subErr);
                //remove loading
                let element = document.getElementById("subButton");
                element.classList.remove("button", "is-loading");
            }
        }
    }

    componentWillUnmount() {
        if(document.getElementById("subErr")) {
			let err = document.getElementById("subErr");
		    err.parentNode.removeChild(err);
		}
    }

    onSubmit = (event) => {
        event.preventDefault();

        const projectData = {
            username: this.props.username+'#'+this.props.profile.discriminator,
            email: this.state.email,
            project: this.state.project
        }

        if(document.getElementById("subErr")) {
			let err = document.getElementById("subErr");
		    err.parentNode.removeChild(err);
		}

        //loading
        let element = document.getElementById("subButton");
        element.classList.add("button", "is-loading");

        //send data
        const localToken = localStorage.getItem('dToken');
        this.props.ppform(localToken, projectData, this.handleRedirect);
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
        if(document.getElementById("subErr")) {
			let err = document.getElementById("subErr");
		    err.parentNode.removeChild(err);
		}
    }

    handleRedirect = (path) => {
        this.props.history.push("/"+path);
    }

    render() {
        return(
            <div>
                {
                    this.props.isLoggedIn ?
                        (
                            <div id="login">
                				<div className="login-card">

                					<div className="content">
                						<form id="subForm" method='POST' onSubmit={this.onSubmit}>

                							<p><b>Discord username</b></p>
                                            <input id="username" disabled type="text" name="username" title="username" value={this.props.username+'#'+this.props.profile.discriminator} required onChange={this.onChange} />
                							<p><b>Email</b>(with which you registered on notion.so)</p>
                                            <input id="password" type="email" name="email" title="email" placeholder={"Email"} required onChange={this.onChange} />
                                            <p><b>Disclaimer:- </b> Email will be used just for notion.so invitation</p>


                							<button id="subButton" type="submit" className="btn btn-primary">Submit</button>
                						</form>
                					</div>
                				</div>
                			</div>
                        )   :
                        (
                            <section className="hero is-medium is-primary">
                                <div className="hero-body">
                                    <div className="container">
                                        <h1 className="title-l title">
                                            Account Required
                                        </h1>
                                    </div>
                                </div>
                            </section>
                        )
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.user_auth.isLoggedIn,
    username: state.user_auth.username,
    profile: state.user_auth.profile,
    projPayForm: state.user_auth.projPayForm
});

export default connect(mapStateToProps, { ppform })(CardHolder);
