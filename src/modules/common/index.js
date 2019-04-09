import React, { Component } from 'react';
import './App.css';
import Header from "../protected/components/layout/header/Header";
import Body from "../protected/components/layout/Body";
import Main from "../protected/components/layout/Main";
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
