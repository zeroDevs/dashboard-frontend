import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DashboardCards extends Component {

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
                                    <Link to="/discord">
                                        Discord Stats
                                    </Link>
                                </h2><br />
                                <h2 className="card-intro">Visuals of discord stats</h2>
                            </div>
                        </div>
                    </div>

                    <div className="cards" key="1">
                        <div className="card-item">
                            <div className="card-image">
                                <img src="https://c.pxhere.com/images/8d/e6/3b102a4f5574f8ccf7f68f760201-1448067.jpg!d" alt="b-gen" />
                            </div>
                            <div className="card-info">
                                <h2 className="card-title">
                                    <Link to="/uptimer">
                                        Uptimer
                                    </Link>
                                </h2><br />
                                <h2 className="card-intro">server monitor</h2>
                            </div>
                        </div>
                    </div>

                    <div className="cards" key="2">
                        <div className="card-item">
                            <div className="card-image">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgbOLCxMLNMPut0KaSdBHUwKmyiVWY7vtm0K-w9LtL4-mQtbmwA" alt="b-gen" />
                            </div>
                            <div className="card-info">
                                <h2 className="card-title">
                                    <Link to="/">
                                        Panel
                                    </Link>
                                </h2><br />
                                <h2 className="card-intro">server control panel</h2>
                                <h2 className="card-intro">(not implemented)</h2>
                            </div>
                        </div>
                    </div>

                    <div className="cards" key="3">
                        <div className="card-item">
                            <div className="card-image">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzz64PWTPPnNjONu-pVH2Dr4gZvyUNyJd9KAfh5mIDV9uNO6A" alt="b-gen" />
                            </div>
                            <div className="card-info">
                                <h2 className="card-title">
                                    <Link to="/projects">
                                        Projects
                                    </Link>
                                </h2><br />
                                <h2 className="card-intro">Edit project embeds</h2>
                            </div>
                        </div>
                    </div>

                    <div className="cards" key="4">
                        <div className="card-item">
                            <div className="card-image">
                                <img src="https://zerotomastery.io/assets/images/advent/advent.png" alt="b-gen" />
                            </div>
                            <div className="card-info">
                                <h2 className="card-title">
                                    <Link to="/projects">
                                        AOC
                                    </Link>
                                </h2><br />
                                <h2 className="card-intro">Manage AOC stuff</h2>
                            </div>
                        </div>
                    </div>

				</div>

		    </div>

        );

    }

}

export default DashboardCards;
