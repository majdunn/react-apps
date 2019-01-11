import React, { Component } from 'react';
import './App.css';
import Pad from './components/Pad';

class App extends Component {
  render() {
    return (
      <div className="App"  id="drum-machine">
        <Pad />
      </div>
    );
  }
}

export default App;
