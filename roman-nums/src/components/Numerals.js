import React, { Component } from "react";
import "./Numerals.css";

export default class Numerals extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
      roman: "NONE"
    };
    this.convertToRoman = this.convertToRoman.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  changeHandler(event) {
    let roman = this.convertToRoman(event.target.value);

    this.setState({
      number: event.target.value,
      roman: roman
    });
  }

  clickHandler(event) {
    let roman = this.convertToRoman(this.state.number);

    this.setState({
      roman: roman
    });
  }
  
  convertToRoman(num) {
    if (num >= 2000) {
      return "Enter a number under 2000";
    } else if (isNaN(num)) {
      return "Enter a number only";
    }

    let roman = "";

    let romanNumerals = [
      [1000, "M"],
      [900, "CM"],
      [800, "DCCC"],
      [700, "DCC"],
      [600, "DC"],
      [500, "D"],
      [400, "CD"],
      [300, "CCC"],
      [200, "CC"],
      [100, "C"],
      [90, "XC"],
      [80, "LXXX"],
      [70, "LXX"],
      [60, "LX"],
      [50, "L"],
      [40, "XL"],
      [30, "XXX"],
      [20, "XX"],
      [10, "X"],
      [9, "IX"],
      [8, "VIII"],
      [7, "VII"],
      [6, "VI"],
      [5, "V"],
      [4, "IV"],
      [3, "III"],
      [2, "II"],
      [1, "I"]
    ];

    for (let i = 0; i < romanNumerals.length; i++) {
      while (romanNumerals[i][0] <= num) {
        roman += romanNumerals[i][1];
        num -= romanNumerals[i][0];
      }
    }

    return roman;
  }

  render() {
    return (
      <div>
        <input className="input" type="text" placeholder="Enter a number!" onChange={this.changeHandler}/>
        {/* <button className="button" type="submit" onClick={this.clickHandler}>
          Convert Me!
        </button> */}
        <p>Your number is: {this.state.number}</p>
        <p>The Roman Numeral is:</p>
        <p className="roman">{this.state.roman}</p>
      </div>
    );
  }
}
