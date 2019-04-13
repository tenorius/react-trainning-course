import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SearchIcon from '@material-ui/icons/Search';
import PokedexIcon from '@material-ui/icons/ViewCarousel';
import TeamIcon from '@material-ui/icons/GroupWork';


class Nav extends Component {
  state = {
    value: 0,
  };
  
  handleChange = (event, value) => {
    this.setState({ value });
    switch (value) {
      case 0: this.props.history.push('/search'); break;
      case 1: this.props.history.push('/pokedex'); break;
      case 2: this.props.history.push('/team'); break;
      default: this.props.history.push('/search');
    }
  };
  
  render() {
    const { value } = this.state;
  
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        style={{
          zIndex: 1000,
          position: 'fixed',
          bottom: 0,
          width: '100%'
        }}
      >
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction label="Pokedex" icon={<PokedexIcon />} />
        <BottomNavigationAction label="Team" icon={<TeamIcon />} />
      </BottomNavigation>
    );
  }
}

export default withRouter(Nav);