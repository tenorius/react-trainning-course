import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

import Typography from "@material-ui/core/Typography";

import Content from "../common/components/layout/Content";
import NavPokedex from "./components/NavPokedex";
import StatsBox from "./components/StatsBox";
import FigurePokemon from "./components/FigurePokemon";
import InfoBox from "./components/infoBox";
import {bindActionCreators} from "redux";
import {operations} from "../common/ducks/pokemonDuck";
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router-dom";
import spritesConstants from "../common/constants/spritesConstants";
import capitalize from "../common/utils/capitalize";

const Styled = {};

Styled.PokemonSection = styled.section`
  padding: 0 16px;
`;

class Index extends Component {
  
  componentDidMount(){
    this.getPokemonIfNeeded();
  }
  
  componentDidUpdate(prevProps){
    if(this.props.match.params.id !== prevProps.match.params.id){
      this.getPokemonIfNeeded();
    }
  }
  
  getPokemonIfNeeded = () => {
    const { id } = this.props.match.params;
    if(!this.props.pokemon){
      this.props.actions.fetchPokemon(id)
        .then(()=>(this.props.actions.fetchPokemonSpecies(id)));
    } else if (!this.props.pokemon.flavorText){
      this.props.actions.fetchPokemonSpecies(id)
    }
  };
  
  render() {
    if(!this.props.pokemon) return null;
    const nextId = parseInt(this.props.pokemon.id) + 1;
    const previousId = parseInt(this.props.pokemon.id) - 1;
    const next = () => { this.props.history.push(`/pokedex/${nextId}`)};
    const previous = () => { this.props.history.push(`/pokedex/${previousId}`)};
    const { pokemon } = this.props;
    return (
      <>
        <Content>
          <NavPokedex
            nextId={nextId}
            previousId={previousId}
            next={next}
            previous={previous}
          />
          <Styled.PokemonSection>
            <Typography variant={"h4"} style={{ marginBottom: '1.5rem'}} align={"center"}>
              {capitalize(pokemon.name)} <span style={{color: 'gray'}}>{`#${pokemon.id}`}</span>
            </Typography>
            <FigurePokemon url={pokemon.sprites[spritesConstants.FRONT_DEFAULT]}/>
            <StatsBox />
            <Typography variant="body1" style={{ marginBottom: "1.5rem" }} color={"inherit"} className="title">
              {pokemon.flavorText}
            </Typography>
            <InfoBox />
          </Styled.PokemonSection>
        </Content>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    pokemon: state.pokemon.byIds[ownProps.match.params.id]
  }
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(operations, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);

