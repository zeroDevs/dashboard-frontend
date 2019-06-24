import React, { Component } from 'react';

class Discord extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stats: {}
        };
    }

    componentDidMount() {
        fetch(`http://localhost:8004/stats/`)
            .then(response => response.json())
            .then(res => {
                this.setState({ stats: res });
            });

    }

    render() {
        const { realtime, stats } = this.state.stats

        if (!stats) return <h1>Loading ....</h1>
        else {
            const activeUsers = Object.keys(stats[0].users.posts).sort(function (a, b) { return stats[0].users.posts[b] - stats[0].users.posts[a] })
            const activeChans = Object.keys(stats[0].channels.popular).sort(function (a, b) { return stats[0].channels.popular[b] - stats[0].channels.popular[a] })
            return (
                <div className="text-center">
                    <h1 className="title-l">Discord</h1>
                    <h1 className="title-m">RealTime</h1>
                    <div className="realtime text-center">

                        {
                            Object.keys(realtime).map(function (key, index) {
                                return (
                                    <div className="realtime-stat">
                                        <h2> {realtime[key]}</h2>
                                        <p>{key}</p>
                                    </div>

                                )
                            })
                        }
                    </div>
                    <hr />
                    <h1 className="title-m">Todays Stats</h1>
                    <div className="realtime text-center">

                        <div className="realtime-stat">
                            <p>Messages</p>
                            <h2>
                                {stats[0].messages.sent}<span> | </span>
                                {stats[0].messages.edited}<span> | </span>
                                {stats[0].messages.deleted}
                            </h2>

                            <p>sent | edited | deleted</p>
                        </div>

                        <div className="realtime-stat">
                            <p>Bot Commands</p>
                            <h2>
                                {stats[0].messages.cmdsent}<span> | </span>
                                {stats[0].messages.cmdfail}<span> | </span>
                                {stats[0].messages.botdmcmd}<span> | </span>
                                {stats[0].messages.botdmmsg}
                            </h2>

                            <p>sent | failed | DM Cmd | DM MSG</p>
                        </div>

                        <div className="realtime-stat">
                            <p>Emoji Reactions</p>
                            <h2>
                                {stats[0].emojis.sent}<span> | </span>
                                {stats[0].emojis.removed}
                            </h2>

                            <p>sent | removed </p>
                        </div>

                        <div className="realtime-stat">
                            <p>Users</p>
                            <h2>
                                {stats[0].users.joined}<span> | </span>
                                {stats[0].users.left}
                            </h2>

                            <p>joined | left </p>
                        </div>

                        <div className="realtime-stat">
                            <p>Mis</p>
                            <h2>
                                {stats[0].misc.ready}<span> | </span>
                                {stats[0].misc.updates}
                            </h2>

                            <p>ready | updates </p>
                        </div>

                    </div>

                    <div className="realtime">
                        <div className="realtime-stat text-left">
                            {
                                activeUsers.map(function (key, index) {
                                    return (
                                        <p>{key} - {stats[0].users.posts[key]}</p>
                                    )
                                })
                            }
                        </div>
                        <div className="realtime-stat text-left">
                            {
                                activeChans.map(function (key, index) {
                                    return (
                                        <p>{key} - {stats[0].channels.popular[key]}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                    

                </div>
            );
        }
    }

}

export default Discord;
