import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import Scroll from 'react-scroll-to-element';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

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
			
			<nav className="navbar is-primary is-fixed-top">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item">
						upTimer
					</Link>

					<span className="navbar-burger burger" data-target="navbarItems">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</span>
				</div>

				<div id="navbarItems" className="navbar-menu">

					<div className="navbar-end top-margin-navbar nav-col">

						<Link to="/about" className="navbar-item">
							About
						</Link>

							<Link to="/support" className="navbar-item">
								Support
							</Link>

						<div className="navbar-item">
							<div className="buttons">
								<Link to="/signup" className="button is-warning">
									<strong>Sign up</strong>
								</Link>
								<Link to="/login" className="button is-transp">
									Log in
								</Link>
							</div>
						</div>

					</div>

				</div>
			</nav>

			);
	}
}

export default Navbar;