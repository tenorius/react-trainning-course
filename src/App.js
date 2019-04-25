import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import { Switch, Route, withRouter } from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import './App.css';
import PokemonPage from "./containers/PokemonPage";
import ItemPage from "./containers/ItemPage";

class App extends Component {
  
  state = {
    currentPageIndex: 0,
  };
  
  changePage = (event, value) => {
    this.setState({ currentPageIndex: value });
    if(value === 0){
      this.props.history.push('/pokemon')
    } else {
      this.props.history.push('/items')
    }
  };
  
  
  render() {
    
    return (
      <div  >
        <AppBar position="static">
          <Toolbar>
            <IconButton  color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" >
              Pokedex
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <a href="https://fontmeme.com/pokemon-font/">
            <img src="https://fontmeme.com/permalink/190424/fa6a7341a255fa8880557289cc2a2708.png" alt="pokemon-font" border="0"/>
          </a>
          <Paper className="content">
            <Tabs value={this.state.currentPageIndex} onChange={this.changePage} fullWidth>
              <Tab label="Pokemons" />
              <Tab label="Items" />
            </Tabs>
            <Switch>
              <Route path={'/pokemon'} component={PokemonPage}/>
              <Route path={'/items'} component={ItemPage}/>
            </Switch>
          </Paper>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
