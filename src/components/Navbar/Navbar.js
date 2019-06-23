import React, {Component} from 'react';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';
import Scroll from 'react-scroll-to-element';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Navbar.css';
import PreLogin from './PreLogin';
import PostLogin from './PostLogin';

class Navbar extends Component {

	// componentDidMount() {
	//
	// }

	render() {

		document.addEventListener('DOMContentLoaded', () => {

				  // Get all "navbar-burger" elements
				  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

				  // Check if there are any navbar burgers
				  if ($navbarBurgers.length > 0) {

				    // Add a click event on each of them
				    $navbarBurgers.forEach( el => {
				      el.addEventListener('click', () => {

				        // Get the target from the "data-target" attribute
				        const target = el.dataset.target;
				        const $target = document.getElementById(target);

				        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				        el.classList.toggle('is-active');
				        $target.classList.toggle('is-active');

				      });
				    });
				  }

				});


		return(

			<nav className="navbar is-primary">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item">
						<img src="https://zerotomastery.io/assets/images/ztm.png" alt="logo" />
					</Link>

					<span className="navbar-burger burger" data-target="navbarItems">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</span>
				</div>

				{
					this.props.isLoggedIn
					?
					(<PostLogin />)
					:
					(<PreLogin />)
				}

			</nav>

			);
	}
}

Navbar.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
	isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps)(Navbar);
