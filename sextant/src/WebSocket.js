import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
const client = new W3CWebSocket('ws://localhost:55455');

class WebSocket extends Component {


    constructor(props) {
        super(props);
        this.state = {
            latency: null
        };
    }

    componentDidMount() {
        client.onmessage = (message) => {
            this.setState({
                latency: new Date().getTime() - message.data
            })
        };
    }

    render() {
        return (
            <span className="WebSocket">
                {this.state.latency}
            </span>
        );
    }
}

  export default WebSocket;