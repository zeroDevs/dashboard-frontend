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
			
			<nav className="navbar is-transparent is-fixed-top">
				<div className="navbar-brand">
					<Link to="/" className="navbar-item title">
						upTimer
					</Link>

					{/* <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"> */}
					<span className="navbar-burger burger" data-target="navbarItems">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</span>
					{/* </a> */}
				</div>

				<div id="navbarItems" className="navbar-menu">

					<div className="navbar-end top-margin-navbar">

						<Link to="/about" className="navbar-item nav-col">												
										About
						</Link>

							<Scroll type="id" element="faq" timeout={80}>
								<Link to="/faq" className="navbar-item nav-col" id="skillId">
									FAQ
								</Link>
							</Scroll>

							<Scroll type="id" element="support" timeout={80}>
								<a href="#faq" className="navbar-item onC nav-col">
									Support
								</a>
							</Scroll>

							<div className="navbar-item">
								<div className="buttons">
									<Link to="/signup" className="button is-primary">
										<strong>Sign up</strong>
									</Link>
									<a className="button is-transparent">
										Log in
									</a>
								</div>
							</div>

						</div>

				</div>
			</nav>

			);
	}
}

export default Navbar;