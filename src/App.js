import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Game from './components/game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Game/>
      </div>
    );
  }
}

export default App;
