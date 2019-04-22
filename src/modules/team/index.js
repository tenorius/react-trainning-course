import React, { Component } from 'react';
import styled from 'styled-components';
import Typography from "@material-ui/core/Typography/Typography";
import Content from "../common/components/layout/Content";
import PokemonCard from "../common/components/PokemonCard";
import PokemonCardList from "../common/components/PokemonCardList";
import {operations} from "../search/ducks/searchDuck";
import connect from "react-redux/es/connect/connect";

const Styled = {};
Styled.SearchContainer = styled.div`
  background-color: lightgray;
  padding: 16px;
  margin-bottom: 1.5rem;

`;

class Index extends Component {
  render() {
    
    return (
      <>
        {/*<Background/>*/}
        <Content>
          <PokemonCardList>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
          </PokemonCardList>
        </Content>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemon: state.team,
  };
}
const actions = { ...operations };

export default connect(mapStateToProps, actions)(Index);
