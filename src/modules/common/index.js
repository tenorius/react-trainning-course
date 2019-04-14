import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import muiTheme from './utils/styles/muiTheme';
import styledTheme from './utils/styles/styledTheme';
import Header from "./components/layout/Header";
import Body from "./components/layout/Body";
import Main from "./components/layout/Main";
import Routes from "./Routes";
import Nav from "./components/layout/Nav";

class Index extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={styledTheme}>
          <Body className="App">
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
