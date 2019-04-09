import React from 'react';
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import HeartIcon from '@material-ui/icons/Favorite';
import PokeballIcon from '../../../assets/images/pokeball.svg';
import TurnIcon from '@material-ui/icons/Autorenew';
import IconButton from '@material-ui/core/IconButton';

const Styled = {};
Styled.Wrapper = styled(Paper)`
   padding: 8px;
   margin: 4px;
   border: 1px solid lightgray;
   border-radius: 6px;
   height: 250px;
   max-width: 200px;
   min-width: 180px;
   flex: 1 1;
   
   .actions{
      display: flex;
      justify-content: center;
      background-color: white;
      width: 80%;
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
      height: 150px;
      width: 100%;
      overflow: hidden;
      background-color: aliceblue;
   
      img{
        width: 100%;
        height: auto;
      }
   }
`;

Styled.IconButton = styled(IconButton)`
  height: 40px!important;
  width: 40px!important;
  padding: 4px!important;
  color: ${props => (props.iconColor)}!important;
`;

const PokemonCard = () => {
  return (
    <Styled.Wrapper>
      <div className="figure">
        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"} alt={"bumba"}/>
      </div>
      <div className="actions">
        <Styled.IconButton iconColor={"darkred"}>
          <HeartIcon />
        </Styled.IconButton>
        <Styled.IconButton iconColor={"black"}>
          <img src={PokeballIcon}/>
        </Styled.IconButton>
        <Styled.IconButton>
          <TurnIcon />
        </Styled.IconButton>
      </div>
      <div className="info">
        <Typography variant="caption" color="inherit" >
          #001
        </Typography>
        <Typography variant="h6" color="inherit" >
          Bulbasaur
        </Typography>
        <Chip label="Grass"/>
        <Chip label="Venom"/>
      </div>
    </Styled.Wrapper>
  );
};

export default PokemonCard;
