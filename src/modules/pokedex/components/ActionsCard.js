import React from 'react';
import styled from 'styled-components';
import media from "../../common/utils/styles/styles";
const Styled = {};
Styled.Wrapper = styled.div`
  background-color: blue;
  flex: 1 1 100%;
  position: static;
  transform: none;
  height: 25%;

  ${media.sm}{
    flex: 1 1 50%;
    position: static;
    transform: none;
    height: 30%;
  }
  
  ${media.md}{
    height: 300px;
    width: 400px;
    position: absolute;
    top: 50%;
    transform: translate(0%,-50%);
    right: 0;
    
    &.actioncard-appear{
      right: -100%;
    }
  
    &.actioncard-appear-active{
      right: 0;
      transition: all 1000ms ease-in;
    }
  }
`;
const ActionsCard = ({className}) => {
  return (
    <Styled.Wrapper className={className}>
    
    </Styled.Wrapper>
  );
};

export default ActionsCard;
