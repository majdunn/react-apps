import React, { Component } from "react";
import Btn from "./Btn";
import "./Pad.scss";

const bellPackage = [
  {
    keyCode: 81,
    keyLetter: "Q",
    id: "A",
    url:
      "http://mj.dunntec.com/projects/bells-machine/static/assets/audio/a.wav"
  },
  {
    keyCode: 87,
    keyLetter: "W",
    id: "B",
    url:
      "http://mj.dunntec.com/projects/bells-machine/static/assets/audio/b.wav"
  },
  {
    keyCode: 69,
    keyLetter: "E",
    id: "BB",
    url:
      "http://mj.dunntec.com/projects/bells-machine/static/assets/audio/bb.wav"
  },
  {
    keyCode: 65,
    keyLetter: "A",
    id: "C",
    url:
      "http://mj.dunntec.com/projects/bells-machine/static/assets/audio/c.wav"
  },
  {
    keyCode: 83,
    keyLetter: "S",
    id: "CC",
    url:
      "http://mj.dunntec.com/projects/bells-machine/static/assets/audio/low-c.wav"
  },
  {
    keyCode: 68,
    keyLetter: "D",
    id: "D",
    url:
      "http://mj.dunntec.com/projects/bells-machine/static/assets/audio/d.wav"
  },
  {
    keyCode: 90,
    keyLetter: "Z",
    id: "E",
    url:
      "http://mj.dunntec.com/projects/bells-machine/static/assets/audio/e.wav"
  },
  {
    keyCode: 88,
    keyLetter: "X",
    id: "F",
    url:
      "http://mj.dunntec.com/projects/bells-machine/static/assets/audio/f.wav"
  },
  {
    keyCode: 67,
    keyLetter: "C",
    id: "G",
    url:
      "http://mj.dunntec.com/projects/bells-machine/static/assets/audio/g.wav"
  }
];

export default class Pad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Click to play!"
    };
  }

  handleDisplay = display => this.setState({ display: "Playing the bell: " + display });

  render() {
    return (
      <div id='drum-machine'>
        <div id="display">{this.state.display}</div>
        <div className="center">
        {bellPackage.map((btn, i) => {
          //console.log(btn.keyLetter);
          return (
            <div className="pushme" key={btn.id}>
              <Btn
                className="drum-pad"
                url={btn.url}
                id={btn.id}
                letter={btn.keyLetter}
                key={btn.id}
                handleDisplay={this.handleDisplay}
              />
            </div>
          );
        })}
      </div></div>
    );
  }
}
