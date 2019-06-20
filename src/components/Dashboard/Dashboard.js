import React, { Component } from 'react';
import  { withRouter } from 'react-router-dom';
import Chart from '../Chart';
import { connect } from 'react-redux';
import './Dashboard.css';

class Dashboard extends Component {

	componentDidMount() {

	}

    render() {

        return (
        	<div>
        		{
        			this.props.isLoggedIn
        				?
        					(
        						<div className="pad has-text-centered">
	        						{
		                                this.props.isLoggedIn && this.props.profile.result !== undefined
		                                    ? (
	                                         	<img className="dash-img-size" alt="profile-img" src={this.props.profile.result.avatar} />
		                                      )
		                                    : (
		                                    	<div className="container-anim-div">
		                                    		<div className="parent-anim-div">
										    			<div className="balls">
														  	<div></div>
														  	<div></div>
														  	<div></div>
														</div>
													</div>
												</div>
		                                      )
		                            }
	        						<Chart />
	        					</div>
        					)
        				:
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
	isLoggedIn: state.auth.isLoggedIn,
    username: state.auth.username,
    profile: state.auth.profile
});

export default withRouter(connect(mapStateToProps)(Dashboard));