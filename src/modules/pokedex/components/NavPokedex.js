import React from 'react';
import styled from 'styled-components';
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid";
import PreviousIcon from '@material-ui/icons/ArrowBackIos';
import NextIcon from '@material-ui/icons/ArrowForwardIos';
import Button from "@material-ui/core/Button/Button";
const Styled = {};
Styled.Wrapper = styled(Grid)`
    margin-bottom: 0.5rem;
    padding: 8px;
    background: #f6685e;
    position: relative;
    &:before, &:after{
      content: '';
      position: absolute;
      bottom: -40px;
      width: 0;
      border-top: 40px solid #f6685e;
    }
    &:before{
      left: 0;
      border-right: 40px solid transparent;
    }
    &:after{
      right: 0;
      border-left: 40px solid transparent;
    }
`;

Styled.NavButton = styled(Button)`
  color: ${props => props.theme.palette.primary.contrastText}!important;
`;

const NavPokedex = ({stats}) => {
  
  return (
    <Styled.Wrapper container justify="space-between" style={{ marginBottom: '0.5rem'}}>
      <Styled.NavButton>
        <PreviousIcon fontSize={"small"}/>
        #900
      </Styled.NavButton>
      <Styled.NavButton>
        #002
        <NextIcon fontSize={"small"} />
      </Styled.NavButton>
    </Styled.Wrapper>
  );
};

export default NavPokedex;
