import React, { Component } from 'react';
import './App.css';
import {useState,useEffect} from 'react'
import Banner from './Banner';
import Exhibit from './Exhibit';

class App extends Component {

    render() {
        //creating IP state
        const [ip, setIP] = useState('');
      
        //creating function to load ip address from the API
        const getData = async () => {
          const res = await axios.get('https://geolocation-db.com/json/')
          console.log(res.data);
          setIP(res.data.IPv4)
        }
        
        useEffect( () => {
          //passing getData method to the lifecycle method
          getData()
      
        }, [])
        return (
            <div className="App">
                <Banner bannerText="CISCO PROJECT" />
                <Exhibit name="I'm an exhibit!">{ip}</Exhibit>
            </div>
        );
    }
}

export default App;

