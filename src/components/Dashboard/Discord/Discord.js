import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dStats } from '../../../actions/DashboardAction.js';

class Discord extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stats: {}
        };
    }

    componentDidMount() {
        const token = localStorage.getItem("token");
        this.props.dStats('20190626', token);
    }

    render() {
        return(
            <div>
                <button className="button is-primary is-rounded">Daily Stats</button>
                <button className="button is-primary is-rounded">Monthly Stats</button>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps, { dStats })(Discord);
