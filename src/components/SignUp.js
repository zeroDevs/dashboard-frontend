// import React, { Component } from 'react';

// class SignUp extends Component {
// 	render() {
// 		return(
// 			<div>
// 				<h1>SignUp</h1>
// 			</div>
// 		);
// 	}
// }

// export default SignUp;

import React from 'react';

const SignUp = (match) => {
	console.log(match);
	return(
		<section className="hero is-primary is-bold">
			<div className="hero-body">
				<div className="container has-text-centered">
					<h1 className="title">
						{match.name}
					</h1>
				</div>
			</div>
	</section>
	);
}

export default SignUp;