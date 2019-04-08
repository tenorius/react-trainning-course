import React, {Component} from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Bag from "./Bag";

const Styled = {};

Styled.AccountButton = styled(Button)`
  margin-left: auto!important;
`;

class Header extends Component {
  render() {
    return (
      <AppBar position="fixed">
        <Toolbar>
          <IconButton  color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" >
            News
          </Typography>
          <Styled.AccountButton color="inherit">Login</Styled.AccountButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;