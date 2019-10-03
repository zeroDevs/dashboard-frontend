import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Support from './components/Support';
import UserLogin from './components/NonAdmin/UserLogin';
import UserDashboard from './components/NonAdmin/UserDashboard';
import CardHolder from './components/NonAdmin/CardHolder';
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
									<Route exact path="/support" component={Support} />
									<Route exact path="/login" component={UserLogin} />
									<Route exact path="/dashboard" component={UserDashboard} />
									<Route path="/project" component={CardHolder} />
									<Route exact path="/projects" component={Projects} />
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
