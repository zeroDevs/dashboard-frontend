import React from 'react';

const Footer = () => {
	return(

		<footer className="footer fcol footer-radius" id="footerId">
			    <div className="content has-text-centered">
				  	<p>
			        Copyright &copy; {(new Date().getFullYear())} upTimer
			      </p>
			    </div>
			</footer>

	);
}

export default Footer;