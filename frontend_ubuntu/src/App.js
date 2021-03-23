import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Button } from '@material-ui/core';
import { Helmet } from "react-helmet";

function App() {
  const [getMessage, setGetMessage] = useState({})

  useEffect(() => {
    axios.get('/flask/hello').then(response => { //http://localhost:5000/flask/hello
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="App">
      <Helmet></Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React + Material-UI + Flask + ROS2 Test</p>
        <div>{getMessage.status === 200 ?
          <h3>{getMessage.data.message}</h3>
          :
          <h3>LOADING</h3>}</div>
        <Button color="primary" variant="contained">Ich bin ein Material-UI Button</Button>
      </header>
    </div>
  );
}

export default App;