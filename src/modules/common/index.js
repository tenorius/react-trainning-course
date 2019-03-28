import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Body from "./components/layout/Body";
import Main from "./components/layout/Main";
import Routes from "./Routes";

class Index extends Component {
  render() {
    return (
      <Body className="App">
        <Header className="App-header" />
        <Main>
          <Routes/>
        </Main>
      </Body>
    );
  }
}

export default Index;
