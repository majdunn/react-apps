import React, { Component } from "react";
import "./Timer.css";

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      sessionRunning: false,
      timeLeft: 1500,
      formatTime: "25:00",
      mode: "SESSION"
    };

    this.onReset = this.onReset.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onStartStop = this.onStartStop.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  onChangeTime(event) {
    let id = event.target.id;
    let sessionLength = this.state.sessionLength;
    let breakLength = this.state.breakLength;
    console.log("id: ", id);

    switch (id) {
      case "session-decrement":
        if (sessionLength <= 1) {
          sessionLength = 1;
        } else {
          sessionLength -= 1;
        }
        break;
      case "session-increment":
        if (sessionLength >= 60) {
          sessionLength = 60;
        } else {
          sessionLength += 1;
        }
        break;
      case "break-decrement":
        if (breakLength <= 1) {
          breakLength = 1;
        } else {
          breakLength -= 1;
        }
        break;
      case "break-increment":
        if (breakLength >= 60) {
          breakLength = 60;
        } else {
          breakLength += 1;
        }
        break;
      default:
        break;
    }
    let timeLeft = sessionLength * 60;
    let formatTime = this.formatTime(timeLeft);
    this.setState({ sessionLength, breakLength, timeLeft, formatTime });
  }

  formatTime(seconds) {
    return (
      (Math.floor(seconds / 60) < 10 ? "0" : "") +
      Math.floor(seconds / 60) +
      ":" +
      ((seconds % 60 < 10 ? "0" : "") + (seconds % 60))
    );
  }

  onReset() {
    clearInterval(this.myInterval);
    this.audio.pause();
    this.audio.currentTime = 0;
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      sessionRunning: false,
      timeLeft: "1500",
      formatTime: "25:00",
      mode: "SESSION"
    });
  }

  onStartStop() {
    if (this.state.sessionRunning) {
      // timer running
      this.setState({ sessionRunning: false });
      clearInterval(this.myInterval);
    } else {
      // timer not running
      this.setState({ sessionRunning: true });
      this.doIntervalChange();
    }
  }

  doIntervalChange = () => {
    this.myInterval = setInterval(() => {
      let timeLeft = this.state.timeLeft;

      if (timeLeft <= 0) {
        var playPromise = this.audio.play();

        if (playPromise !== undefined) {
          playPromise
            .then(_ => {
              this.audio.currentTime = 0;
            })
            .catch(error => {});
        }

        this.setState({
          sessionRunning: false,
          timeLeft: "00",
          formatTime: "00:00"
        });

        if (this.state.mode === "SESSION") {
          timeLeft = this.state.breakLength * 60;
          let formatTime = this.formatTime(timeLeft);
          this.setState({
            sessionRunning: true,
            timeLeft: timeLeft,
            formatTime: formatTime,
            mode: "BREAK"
          });
        } else if (this.state.mode === "BREAK") {
          timeLeft = this.state.sessionLength * 60;
          let formatTime = this.formatTime(timeLeft);
          this.setState({
            sessionRunning: true,
            timeLeft: timeLeft,
            formatTime: formatTime,
            mode: "SESSION"
          });
        }
        //clearInterval(this.myInterval);
      } else {
        timeLeft -= 1;
        let formatTime =
          (Math.floor(timeLeft / 60) < 10 ? "0" : "") +
          Math.floor(timeLeft / 60) +
          ":" +
          ((timeLeft % 60 < 10 ? "0" : "") + (timeLeft % 60));
        this.setState({ timeLeft, formatTime });
        console.log("timeLeft, formatTime: ", timeLeft, formatTime);
      }
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.myInterval);
  };

  render() {
    return (
      <div className="timer-wrapper">
        <div className="countdown-wrapper">
          <p id="timer-label">{this.state.mode}</p>
          <div id="time-left">{this.state.formatTime}</div>
          <button id="start_stop" onClick={this.onStartStop}>
            {this.state.sessionRunning ? "Stop" : "Start"}
          </button>
          <button id="reset" onClick={this.onReset}>
            Reset
          </button>
        </div>
        <div className="setter-wrapper">
          <p id="session-label">Session</p>
          <button id="session-decrement" onClick={this.onChangeTime}>
            -
          </button>
          <p id="session-length">{this.state.sessionLength}</p>
          <button id="session-increment" onClick={this.onChangeTime}>
            +
          </button>
        </div>
        <div className="setter-wrapper">
          <p id="break-label">Break</p>
          <button id="break-decrement" onClick={this.onChangeTime}>
            -
          </button>
          <p id="break-length">{this.state.breakLength}</p>
          <button id="break-increment" onClick={this.onChangeTime}>
            +
          </button>
        </div>
        <audio
          id="beep"
          src="http://mj.dunntec.com/projects/bells-machine/static/assets/audio/low-c.wav"
          ref={ref => (this.audio = ref)}
        />
      </div>
    );
  }
}
