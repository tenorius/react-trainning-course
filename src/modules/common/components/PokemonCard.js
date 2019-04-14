import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import HeartIcon from '@material-ui/icons/Favorite';
import PokeballIcon from '../../../assets/images/pokeball.svg';
import TurnIcon from '@material-ui/icons/Autorenew';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography/Typography";

import {operations} from '../ducks/pokemonDuck';
import spritesConstants from "../constants/spritesConstants";
import capitalize from "../utils/capitalize";

const Styled = {};
Styled.Wrapper = styled(Paper)`
   padding: 8px;
   margin: 4px;
   border: 1px solid lightgray;
   border-radius: 6px;
   height: 250px;
   max-width: 200px;
   min-width: 150px;
   flex: 1 1;
   
   .actions{
      display: flex;
      justify-content: center;
      background-color: white;
      width: 90%;
      margin: auto;
      margin-top: -16px;
      border-radius: 32px 32px 0 0;
      z-index: 2;
      position: relative;
     svg {
       margin: 0 6px;
     }
   }
   .figure {
      height: 130px;
      width: 100%;
      overflow: hidden;
      background-color: aliceblue;
      display: flex;
      justify-content: center;
      position: relative;
      align-items: center;
   
      img{
        width: auto;
        height: 100%;
        position: relative;
        margin: 0 auto;
        transform: scale(1.5);
      }
   }
   .id{
    color: #919191;
    font-size: 0.8rem;
    margin: 0;
   }
   
   .name{
    margin: 0;
   }
   
   .type{
    display: inline-block;
    background: forestgreen;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    margin: 0 4px 0 0;
    min-width: 60px;
    color: white;
    border-radius: 3px;
   }
`;

Styled.IconButton = styled(IconButton)`
  height: 40px!important;
  width: 40px!important;
  padding: 4px!important;
  color: ${props => (props.iconColor)}!important;
`;

class PokemonCard extends Component {
  state = {
    currentSprite: spritesConstants.FRONT_DEFAULT,
  };
  
  handleCardClick = () => {
    this.props.history.push(`/pokedex/${this.props.pokemon.id}`)
  };
  
  componentDidMount() {
    console.log('first render, pokemon:', this.props.pokemon);
    if (this.props.pokemon) {
      //this.props.actions.fetchPokemon(this.props.id);
    }
  }
  
  render() {
    console.log('pokemon:', this.props.pokemon);
    const {pokemon} = this.props;
    const {currentSprite} = this.state;
    if(!pokemon) return <Styled.Wrapper />
    return (
      <Styled.Wrapper onClick={this.handleCardClick}>
        <div className="figure">
          <img src={pokemon.sprites[this.state.currentSprite]}
               alt={`sprite ${pokemon.name} ${currentSprite}`}/>
        </div>
        <div className="actions">
          <Styled.IconButton iconColor={"darkred"}>
            <HeartIcon/>
          </Styled.IconButton>
          <Styled.IconButton iconColor={"black"}>
            <img src={PokeballIcon}/>
          </Styled.IconButton>
          <Styled.IconButton>
            <TurnIcon/>
          </Styled.IconButton>
        </div>
        <div className="info">
          <p className="id">
            {`#${pokemon.id}`}
          </p>
          <Typography variant="h6" color="textPrimary">
            {capitalize(pokemon.name)}
          </Typography>
          {pokemon.types.map((item) => (
            (<span className="type">
                {capitalize(item.type.name)}
              </span>)
          ))}
        </div>
      </Styled.Wrapper>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  pokemon: state.pokemon.byIds[ownProps.id]
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(operations, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PokemonCard));
