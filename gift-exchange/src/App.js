import React, { Component } from "react";
//import logo from './images.png';
import "./App.css";
import Matched from "./Matched";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      santa: [],
      matched: [],
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.daysUntilXmas = this.daysUntilXmas.bind(this);
  }

  changeHandler(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitHandler(event) {
    event.preventDefault();
    let newSanta = [...this.state.santa, this.state.input];
    this.setState({
      input: "",
      santa: newSanta
    });
  }

  daysUntilXmas() {
    let today = new Date();
    const xmas = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth() === 11 && today.getDate() > 25) {
      xmas.setFullYear(xmas.getFullYear() + 1);
    }
    const oneday = 1000 * 60 * 60 * 24;
    return `${Math.ceil(
      (xmas.getTime() - today.getTime()) / oneday
    )} days left until Christmas!`;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Gift Exchange Matcher</h1>
          <p>Enter your participants and get the matches automatically generated!</p>
          <h2>{this.daysUntilXmas()}</h2>
          <form onSubmit={this.submitHandler}>
            <input className="input" value={this.state.input} onChange={this.changeHandler} /> 
            <button className="button" type="submit" onClick={this.submitHandler}>
              Add a name!
            </button>
          </form>
          <p>Participants: {this.state.santa.join(", ")}</p>
          <Matched santa={this.state.santa}/>
        </header>
      </div>
    );
  }
}

export default App;
