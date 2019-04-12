import React from 'react';
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import HeartIcon from '@material-ui/icons/Favorite';
import PokeballIcon from '../../../assets/images/pokeball.svg';
import TurnIcon from '@material-ui/icons/Autorenew';
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography/Typography";

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
   
      img{
        width: 100%;
        height: auto;
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
        <p className="id">
          #001
        </p>
        <Typography variant="h6" color="textPrimary">
          Bulbasaur
        </Typography>
        <span className="type">
          Grass
        </span>
        <span className="type">
          Venom
        </span>
      </div>
    </Styled.Wrapper>
  );
};

export default PokemonCard;
