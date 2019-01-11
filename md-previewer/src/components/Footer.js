import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="row">
          <div className="column">
            <a className="link" href="http://mj.dunntec.com">
              <i className="icon ion-home" />
            </a>
          </div>
          <div className="column">
            <a className="link" href="mailto:mj@dunntec.com">
              <i className="icon ion-email" />
            </a>
          </div>
          <div className="column">
            <a className="link" href="http://www.linkedin.com/in/mj-dunn-online">
              <i className="icon ion-social-linkedin-outline" />
            </a>
          </div>
          <div className="column">
            <a className="link" href="https://github.com/majdunn">
              <i className="icon ion-social-github" />
            </a>
          </div>
        </div>
        <div>
          <p className="copyright">MJ Dunn © 2018</p>
        </div>
      </div>
    );
  }
}
