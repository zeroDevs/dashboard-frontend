import React, { Component } from 'react';
import  { withRouter } from 'react-router-dom';

class Dashboard extends Component {
    render() {

        return (
            <h1>Dashboard</h1>
        );
    }
}

export default withRouter(Dashboard);
