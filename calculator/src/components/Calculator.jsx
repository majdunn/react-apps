import React, { Component } from "react";
import "./Calculator.css";

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "0",
      display: "0",
      decimal: false,
      operand: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const keytype = event.target.getAttribute("keytype");
    let display = this.state.display;
    switch (keytype) {
      case "num":
        if (display === "0") {
          display = event.target.value;
        } else {
          display += event.target.value;
        }
        this.setState({
          current: event.target.value,
          display: display,
          operand: false
        });
        break;
      case "operand":
        if (this.state.operand) {
            display = display.slice(0, -1) + event.target.value;  
        } else {
          display += event.target.value;
        }
        this.setState({
          current: event.target.value,
          display: (display),
          decimal: false,
          operand: true
        });
        break;
      case "decimal":
        if (this.state.decimal) {
          break;
        }
        display += event.target.value;
        this.setState({
          current: event.target.value,
          display: display,
          decimal: true,
          operand: false
        });
        break;
      case "equals":
        let evaluate = eval(this.state.display);
        this.setState({
          current: evaluate,
          display: evaluate,
          decimal: false,
          operand: false
        });
        break;
      case "clear":
        this.setState({
          current: "0",
          display: "0",
          decimal: false,
          operand: false
        });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
          <h1>Formula Calculator</h1>
        <div id="display">{this.state.display}</div>
        <div className="keypad">
          <button
            keytype="num"
            onClick={e => this.handleClick(e)}
            value="7"
            id="seven"
          >
            7
          </button>
          <button
            keytype="num"
            onClick={e => this.handleClick(e)}
            value="8"
            id="eight"
          >
            8
          </button>
          <button
            keytype="num"
            onClick={e => this.handleClick(e)}
            value="9"
            id="nine"
          >
            9
          </button>
          <button
            keytype="operand"
            onClick={e => this.handleClick(e)}
            value="/"
            id="divide"
          >
            ÷
          </button>
          <button
            keytype="num"
            onClick={e => this.handleClick(e)}
            value="4"
            id="four"
          >
            4
          </button>
          <button
            keytype="num"
            onClick={e => this.handleClick(e)}
            value="5"
            id="five"
          >
            5
          </button>
          <button
            keytype="num"
            onClick={e => this.handleClick(e)}
            value="6"
            id="six"
          >
            6
          </button>
          <button
            keytype="operand"
            onClick={e => this.handleClick(e)}
            value="*"
            id="multiply"
          >
            *
          </button>
          <button
            keytype="num"
            onClick={e => this.handleClick(e)}
            value="1"
            id="one"
          >
            1
          </button>
          <button
            keytype="num"
            onClick={e => this.handleClick(e)}
            value="2"
            id="two"
          >
            2
          </button>
          <button
            keytype="num"
            onClick={e => this.handleClick(e)}
            value="3"
            id="three"
          >
            3
          </button>
          <button
            keytype="operand"
            onClick={e => this.handleClick(e)}
            value="-"
            id="subtract"
          >
            -
          </button>
          <button
            keytype="decimal"
            onClick={e => this.handleClick(e)}
            value="."
            id="decimal"
          >
            .
          </button>
          <button
            keytype="num"
            onClick={e => this.handleClick(e)}
            value="0"
            id="zero"
          >
            0
          </button>
          <button
            keytype="operand"
            onClick={e => this.handleClick(e)}
            value="+"
            id="add"
          >
            +
          </button>
          <button
            keytype="clear"
            onClick={e => this.handleClick(e)}
            value="clear"
            id="clear"
          >
            C
          </button>
          <button
            keytype="equals"
            onClick={e => this.handleClick(e)}
            value="equals"
            id="equals"
          >
            =
          </button>
        </div>
      </div>
    );
  }
}
