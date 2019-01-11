import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Markdown from './components/Markdown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Markdown />
        <Footer />
      </div>
    );
  }
}

export default App;
