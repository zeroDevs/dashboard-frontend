import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SignUp from './components/SignUp';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import A51 from './components/A51';
import Chart from './components/Dashboard/Chart';
import Discord from './components/Dashboard/Discord/Discord';
import Projects from './components/Dashboard/Projects';
import Footer from './components/Footer';

import store from './store';

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
						<Navbar />
							<div className="mainSection">
								<Switch>
									<Route exact path="/" component={Hero} />
									<Route exact path="/about" component={About} />
									<Route exact path="/signup" component={SignUp} />
									<Route exact path="/login" component={Login} />
									<Route exact path="/dashboard" component={Dashboard} />
									<Route exact path="/discord" component={Discord} />
									<Route exact path="/uptimer" component={Chart} />
									<Route exact path="/projects" component={Projects} />
									<Route exact path="/nevada/a51" component={A51} />
								</Switch>
							</div>
						<Footer />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
