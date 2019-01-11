import React, { Component } from "react";
import "./App.css";
import { Button, Alert } from "reactstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quote from "./components/Quote";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        {/* <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button> */}

        {/* <Alert color="info" isOpen={this.state.visible} toggle={this.onDismiss}>
          I am an alert and I can be dismissed!
        </Alert> */}

        <Quote />
        
        <Footer />
      </div>
    );
  }
}

export default App;
