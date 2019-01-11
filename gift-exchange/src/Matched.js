import React, { Component } from "react";
import "./Matched.css";

class Matched extends Component {
  constructor(props) {
    super(props);

    this.state = {
      matched: []
    };

    this.getSanta = this.getSanta.bind(this);
  }

  getSanta() {
    let matched = [];
    let mixMe = array => {
      return array
        .map(a => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1]);
    };

    let santaList = mixMe(this.props.santa);
    let gifteeList = mixMe(this.props.santa);
    console.log("santaList: ", santaList);
    console.log("gifteeList: ", gifteeList);

    for (let i = 0; i < santaList.length; i++) {
      // variable to hold the position of the giftee in gifteeList for splicing
      let pos = 0;

      let santa = santaList[i];
      let giftee = gifteeList[pos];

      // santa cannot be matched to themselves
      while (santa === giftee) {
        // if the giftee list = 1, there are no other options, so have to start over.
        if (gifteeList.length === 1) {
          matched = [];
          santaList = mixMe(this.props.santa);
          gifteeList = mixMe(this.props.santa);
          i = 0;
          break;
        } else {
          giftee = gifteeList[1];
          pos = 1;
        }
      }

      // cut the giftee so it can't be duplicated
      gifteeList.splice(pos, 1);
      console.log("gifteeList: ", gifteeList);
      matched.push({ santa: santa, giftee: giftee });
    }
    console.log(matched);

    this.setState({
      matched: matched
    });
  }

  render() {
    return (
      <div>
        <p>
          <button className="button" type="submit" onClick={this.getSanta}>
            Get the matches!
          </button>
        </p>
        {/* <p>Matches:</p> */}
        {this.state.matched.map(function(d, idx) {
          return (
            <p key={idx}>
              Santa: {d.santa} ⇨ To: {d.giftee}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Matched;
