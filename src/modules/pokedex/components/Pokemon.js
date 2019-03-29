import React from 'react';
import styled from 'styled-components';
import media from '../../common/utils/styles'
const Styled = {};
Styled.Wrapper = styled.div`
  background-color: yellow;
  flex: 1 1 100%;
  height: 50%;
  
  ${media.sm}{
    flex: 1 1 100%;
    position: static;
    transform: none;
    height: 70%;
  }
  
  ${media.md}{
    height: 600px;
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);

    &.pokemon-appear{
      transform: translate(-50%, 50%);
      height: 60px;
      width: 40px;
    }
  
    &.pokemon-appear-active{
      transform: translate(-50%,-50%);
      height: 600px;
      width: 400px;
      transition: all 1000ms ease-out;
    }
  }
`;
const Pokemon = () => {
  return (
    <Styled.Wrapper>
    
    </Styled.Wrapper>
  );
};

export default Pokemon;
