import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dStats } from '../../../actions/DashboardAction.js';
import '../../../style.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    LineMarkSeries,
    ChartLabel,
    Hint
} from 'react-vis';


class Discord extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stats: {
                msgValue: false,
                memValue: false
            }
        };
    }

    componentDidMount() {
        const token = localStorage.getItem("token");
        this.props.dStats('20190626', token);
    }

    render() {
        const data = [
          {x: 0, y: 8},
          {x: 1, y: 5},
          {x: 2, y: 4},
          {x: 3, y: 9},
          {x: 4, y: 1},
          {x: 5, y: 7},
          {x: 6, y: 6},
          {x: 7, y: 3},
          {x: 8, y: 2},
          {x: 9, y: 0}
        ];
        const data2 = [
          {x: 0, y: 30},
          {x: 1, y: 150},
          {x: 2, y: 60},
          {x: 3, y: 50},
          {x: 4, y: 20},
          {x: 5, y: 70},
          {x: 6, y: 40},
          {x: 7, y: 80},
          {x: 8, y: 0},
          {x: 9, y: 210}
        ];
        const MsgChartProps = {
            animtion: true,
            onNearestXY: msgValue => this.setState({msgValue}),
            curve: 'curveMonotoneX',
            data
        }
        const MemChartProps = {
            animtion: true,
            onNearestXY: memValue => this.setState({memValue}),
            curve: 'curveMonotoneX',
            data: data2
        }
        return(
                <section className="section">
                    <div className="container">
                        <h1 className="title has-text-centered">Discord Stats</h1>
                        <div className="has-text-centered">
                            <button className="button is-outlined is-primary is-rounded">Weekly Stats</button>
                            <button className="button is-outlined is-primary is-rounded">Monthly Stats</button>
                        </div>
                        <hr />
                        <div className="columns is-multiline is-mobile is-centered">
                            <div className="column is-half">
                                <XYPlot
                                    width={400}
                                    height={400}
                                    onMouseLeave={() => this.setState({msgValue: false})}>
                                      <XAxis title="time" />
                                      <YAxis title="messages"/>
                                      <LineMarkSeries {...MsgChartProps} />
                                      {this.state.msgValue ? <Hint value={this.state.msgValue} /> : null}
                                </XYPlot>
                            </div>
                            <div className="column is-half">
                                <XYPlot
                                    width={400}
                                    height={400}
                                    onMouseLeave={() => this.setState({memValue: false})}>
                                    <XAxis title="time" />
                                    <YAxis title="members"/>
                                    <LineMarkSeries {...MemChartProps} />
                                    {this.state.memValue ? <Hint value={this.state.memValue} /> : null}
                                </XYPlot>
                            </div>
                        </div>

                    </div>
                </section>
        );
    }

}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    stats: state.auth.stats
});

export default connect(mapStateToProps, { dStats })(Discord);
