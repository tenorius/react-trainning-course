import React from 'react';
import styled from 'styled-components';
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid";
import PreviousIcon from '@material-ui/icons/ArrowBackIos';
import NextIcon from '@material-ui/icons/ArrowForwardIos';
import Button from "@material-ui/core/Button/Button";
const Styled = {};
Styled.Wrapper = styled.div`
  height: 300px;
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: ${props => props.theme.palette.grey[100]};
  border-radius: ${props => props.theme.shaping.borderRadius * 2}px;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: auto;
    height: 100%;
    transform: scale(1.2);
    position: absolute;
  }
`;

const FigurePokemon = ({url}) => {
  return (
    <Styled.Wrapper>
      <img src={url} alt={"bumba"}/>
    </Styled.Wrapper>
  );
};

export default FigurePokemon;
