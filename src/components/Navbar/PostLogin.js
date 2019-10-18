import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchProfile } from '../../actions/loginAction';
import { fetchUserProfile } from '../../actions/userAuthAction';
import { connect } from 'react-redux';

class PostLogin extends Component {

    // componentDidMount() {
    //     let splitUrl = window.location.href.split("/");
    //     // let uName = "";
    //     switch(splitUrl[splitUrl.length - 1]) {
    //         case "dashboard":
    //             this.props.fetchUserProfile(localStorage.getItem('dToken'));
    //             // this.setState({uName: this.props.uUsername, isAdmin: false});
    //             this.uName = this.props.uUsername;
    //             this.isAdmin = false;
    //             console.log(this.uName);
    //             return;
    //         case "admin":
    //             this.props.fetchProfile(this.props.username, localStorage.getItem('token'));
    //             // this.setState({uName: this.props.username, isAdmin: true});
    //             this.uName = this.props.username;
    //             this.isAdmin = true;
    //             return;
    //         default:
    //             return;
    //     }
    // }

    logout = () => {
        if(this.props.isLoggedIn || this.props.isUserLoggedIn) {
            if(this.props.isLoggedIn) {
                localStorage.removeItem('token');
            } else if (this.props.isUserLoggedIn) {
                localStorage.removeItem('dToken');
            } else {
                return;
            }

            console.log('logout');

            // this.setState({uName: "..."});
            this.forceUpdate();
        }

    }

    render() {
        return(

                <div id="navbarItems" className="navbar-menu">
                    <div className="navbar-end top-margin-navbar nav-col">

                    <div className="buttons is-gapless">

                        <Link to="/dashboard" className="button is-transp">
                            Dashboard
                        </Link>

                        <div className="dropdown is-hoverable">
                          <div className="dropdown-trigger">
                            <p className="button btn is-transp" aria-haspopup="true" aria-controls="dropdown-menu4">
                                {
                                    this.props.isLoggedIn ?
                                        (
                                            this.props.username
                                        ) :
                                        (
                                            this.props.uUsername
                                        )
                                }
                            </p>
                          </div>
                          <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div className="dropdown-content">
                              <div className="dropdown-item">
                                  <Link to="/" onClick={this.logout} className="button is-transp is-danger">
                                      Logout
                                  </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                    </div>


                    </div>
                </div>

        );
    }
}

PostLogin.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    profile: PropTypes.object,
    isUserLoggedIn: PropTypes.bool.isRequired,
    uUsername: PropTypes.string.isRequired,
    userProfile: PropTypes.object
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    username: state.auth.username,
    profile: state.auth.profile,
    isUserLoggedIn: state.user_auth.isLoggedIn,
    uUsername: state.user_auth.username,
    userProfile: state.user_auth.profile
})

export default connect(mapStateToProps, { fetchProfile, fetchUserProfile })(PostLogin);
