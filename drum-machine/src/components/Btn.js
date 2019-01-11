import React, { Component } from "react";

export default class Btn extends Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
    this.playSound = this.playSound.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKey);
    window.focus();
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKey);
  }

  handleKey(e) {
    console.log(
      "handleKey triggered, key presssed: ",
      e.keyCode,
      this.props.letter
    );
    if (e.keyCode === this.props.letter.charCodeAt()) {
      var playPromise = this.audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(_ => {
          this.audio.currentTime = 0;
        })
        .catch(error => {});
    }
      this.props.handleDisplay(this.props.id);
    }
  }

  playSound = () => {
    console.log("clicked", this.props.id);
    var playPromise = this.audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(_ => {
          this.audio.currentTime = 0;
        })
        .catch(error => {});
    }

    this.props.handleDisplay(this.props.id);
  };

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.playSound}>
        {this.props.letter}
        <audio
          className="clip"
          id={this.props.letter}
          src={this.props.url}
          ref={ref => (this.audio = ref)}
        >
          {this.props.letter}
        </audio>
      </div>
    );
  }
}
