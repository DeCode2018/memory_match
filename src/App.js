import React, { Component } from 'react';
import './App.css';
import Puzzle from './Puzzle'
import StatusBar from './StatusBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <h1>MEMORY MATCH</h1>
        </div>
        <StatusBar />
        <div className="Puzzle-body" id="Puzzle-body">

          <Puzzle />
        </div>
      </div>


    );
  }
}

export default App;
