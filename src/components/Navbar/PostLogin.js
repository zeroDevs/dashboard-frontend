import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchProfile } from '../../actions/loginAction';
import { connect } from 'react-redux';

class PostLogin extends Component {

    componentDidMount() {
        console.log(this.props.username);
        this.props.fetchProfile(this.props.username, localStorage.getItem('token'));
    }

    render() {
        return(

                <div id="navbarItems" className="navbar-menu">
                    <div className="navbar-end top-margin-navbar nav-col">

                        <Link to="/dashboard" className="navbar-item">
                            Dashboard
                        </Link>

                            {console.log(this.props.isLoggedIn ,this.props.profile.result)}
                            {
                                this.props.isLoggedIn && this.props.profile.result !== undefined
                                    ? (
                                            <figure className="image is-48x48 navbar-item">
                                                <img className="is-rounded sizer" src={this.props.profile.result.avatar} />
                                            </figure>
                                      )
                                    : (
                                        <figure className="image is-48x48">
                                            <img className="is-rounded sizer" src="https://bulma.io/images/placeholders/128x128.png" />
                                        </figure>
                                      )
                            }


                    </div>
                </div>

        );
    }
}

PostLogin.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
    profile: PropTypes.object
};

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    username: state.auth.username,
    profile: state.auth.profile
})

export default connect(mapStateToProps, { fetchProfile })(PostLogin);
