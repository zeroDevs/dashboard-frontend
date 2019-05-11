import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import Scroll from 'react-scroll-to-element';
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

				<div className="has-text-centered">
					<section className="hero is-large hero-img is-dark" id="home">
						  <div className="hero-head">
						    <nav className="navbar is-fixed-top is-transparent">
						      <div className="container">
						        <div className="navbar-brand">
						          <span className="navbar-burger burger" data-target="navbarMenuHeroB">
						            <span></span>
						            <span></span>
						            <span></span>
						          </span>
						        </div>
						        <div id="navbarMenuHeroB" className="navbar-menu">
					        	<div className="navbar-end nav-col top-margin-navbar">

					            	<Scroll type="id" element="about" timeout={80}>
													<a href="#about" className="navbar-item onC is-active" id="aboutId">
														About
													</a>
												</Scroll>

												<Scroll type="id" element="skills" timeout={80}>
													<a href="#skills" className="navbar-item onC is-active" id="skillId">
														FAQ
													</a>
												</Scroll>

												<Scroll type="id" element="proj" timeout={80}>
													<a href="#projects" className="navbar-item onC is-active" id="projId">
														Support
													</a>
												</Scroll>

												<div className="navbar-item">
													<div className="buttons">
														<a className="button is-primary">
															<strong>Sign up</strong>
														</a>
														<a className="button is-transparent">
															Log in
														</a>
													</div>
												</div>

						        </div>
						        </div>
						      </div>
						    </nav>
						  </div>

						  <div className="hero-body hero-bg">
						  <div className="hero-bg-overlay">
						    <div className="container has-text-centered">
						      <h1 className="title title-l">
						        UpTimer
						      </h1>
									<h1 className="title" style={{color: "#00d1b2"}}>Get Notified during DownTime FOR FREE !!*</h1>
									<h6>*only for premium accounts</h6>
						    </div>
						    </div>
						  </div>
					</section>
				</div>
			);
	}
}

export default Navbar;