import React from 'react';
import './Components.css';

const Footer = () => {
	return(

		<footer className="footer" id="footerId">
			<div className="has-text-centered">
				<p className="fCol">
					Copyright &copy; {(new Date().getFullYear())} Zero To Mastery
				</p>
			</div>
		</footer>

	);
}

export default Footer;
