import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from "./routes";

class App extends Component {
  constructor(props){
    super(props);
  };
  render() {
    return (
      <div>
          <Routes />        
      </div>
    );
  }
}

export default App;
