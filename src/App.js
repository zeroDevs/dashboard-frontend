import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Hero} />
						<Route exact path="/about" component={About} />
						<Route exact path="/signup" component={snu} />
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
}

const namer = (name) => {
	return name;
}

const snu = () => (
	<SignUp name={"SignUp"} />
);

export default App;
