import React from 'react';
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import HeartIcon from '@material-ui/icons/Favorite';
import PokeballIcon from '@material-ui/icons/Album';
import TurnIcon from '@material-ui/icons/Autorenew';

const Styled = {};
Styled.Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  padding: 0 16px;
  list-style: none;
  margin: 0 0 1.5rem 0;
  width: 100%;
`;

const PokemonCardList = ({className, children}) => {
  return (
    <Styled.Wrapper>
      {children}
    </Styled.Wrapper>
  );
};

export default PokemonCardList;
