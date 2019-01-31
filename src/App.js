import React, { Component } from 'react';
import './App.css';
import Puzzle from './Puzzle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <h1>Memory Match</h1>
        </div>
        <div className="Puzzle-body">
          <Puzzle />
        </div>
      </div>


    );
  }
}

export default App;
