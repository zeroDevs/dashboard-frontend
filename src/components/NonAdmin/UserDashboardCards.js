import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserDashboardCards extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(

            <div className="container">
			    {
                    this.props.profile.result === undefined
                    ?("")
                    :(<><h1 className="title blue-col">Hi {this.props.profile.result.username} 👋</h1><br /></>)
                }
				<div id="card-holder" className="card-hold tile columns is-ancestor is-mobile is-multiline is-centered has-text-centered">

                    <div className="cards" key="0">
                        <div className="card-item">
                            <div className="card-image">
                                <img src="https://cdn.pixabay.com/photo/2016/12/22/13/35/analytics-1925495_960_720.png" alt="b-gen" />
                            </div>
                            <div className="card-info">
                                <h2 className="card-title">
                                    <Link to="/project/?p=projpaycheck">
                                        Project Paycheck
                                    </Link>
                                </h2><br />
                                <h2 className="card-intro">a paycheck-to-paycheck breakdown of income and expenses</h2>
                            </div>
                        </div>
                    </div>

                    <div className="cards" key="1">
                        <div className="card-item">
                            <div className="card-image">
                                <img src="https://cdn.pixabay.com/photo/2016/12/22/13/35/analytics-1925495_960_720.png" alt="b-gen" />
                            </div>
                            <div className="card-info">
                                <h2 className="card-title">
                                    <Link to="/project/?p=projlive">
                                        Project Live
                                    </Link>
                                </h2><br />
                                <h2 className="card-intro">a paycheck-to-paycheck breakdown of income and expenses</h2>
                            </div>
                        </div>
                    </div>

				</div>

		    </div>

        );

    }

}

export default UserDashboardCards;
