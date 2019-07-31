import React, { Component } from 'react';
import  { withRouter } from 'react-router-dom';
import DashboardCards from './DashboardCards';
import { connect } from 'react-redux';
import './Dashboard.css';

class Dashboard extends Component {

    render() {
		let avatar_url;
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
	                                         	//<img className="dash-img-size" alt="profile-img" src={this.props.profile.result.avatar} />
												<img className="dash-img-size" alt="profile-img" src="https://robohash.org/test" />
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
	        						<DashboardCards profile={this.props.profile} />
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
