import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Body from "./components/layout/Body";

class Index extends Component {
  render() {
    return (
      <Body className="App">
        <Header className="App-header" />
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </Body>
    );
  }
}

export default Index;
