import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("ws://localhost:55455");

client.onerror = function() {
    console.log('Connection Error');
};

function Latency() {
    const [lat, setLat] = useState(0);
    useEffect(() => {
      client.onopen = () => {
        console.log("WebSocket Client Connected");
      };
      client.onmessage = (message) => {
          // console.log(message);
        const sent = message.data;
        client.close();
        const recv = new Date().getTime();
        console.log(sent , recv);
        setLat(recv - sent);
      };
    }, []);
    return <div>{lat} ms</div>;
  }

  export default Latency;