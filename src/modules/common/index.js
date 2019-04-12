import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import muiTheme from './utils/muiTheme';
import styledTheme from './utils/styledTheme';
import './App.css';
import Header from "../protected/components/layout/header/Header";
import Body from "../protected/components/layout/Body";
import Main from "../protected/components/layout/Main";
import Routes from "./Routes";

class Index extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={styledTheme}>
          <Body className="App">
            <Header className="App-header"/>
            <Main>
              <Routes/>
            </Main>
          </Body>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

export default Index;
