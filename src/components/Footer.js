import React from 'react';
import './Components.css';

const Footer = () => {
	return(

		<footer className="footer" id="footerId">
			<div className="has-text-centered">
				<p className="title fCol">
					upTimer
				</p>
				<a  href='https://git.zerobot.xyz/zeroDevs/upTimer-FrontEnd' target='_blank' rel='noopener noreferrer'>
						<img className='social_icon marg' src={require("../assets/rusty.png")} alt="RustyGit"/>
				</a>

				<a  href='https://twitter.com/notAnkur' target='_blank' rel= 'noopener noreferrer'>
						<img className='social_icon marg' src={require("../assets/twitter.png")} alt="twitter"/>
				</a>
				<p className="fCol">
					Copyright &copy; {(new Date().getFullYear())} upTimer
				</p>
			</div>
		</footer>

	);
}

export default Footer;