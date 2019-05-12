import React from 'react';

const Hero = () => {
	return(
		<section className="hero is-primary is-medium">
			<div className="hero-body">
				<div className="container has-text-centered">
					<h1 className="title title-l">
						UpTimer
					</h1>
					<p className="title title-m" style={{color: "#363636"}}>
						Get Notified during DownTime for FREE !*
					</p>
					<h6>
						*only for premium accounts
					</h6>
				</div>
			</div>
	</section>
	);
}

export default Hero;