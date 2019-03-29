import React from 'react';
import styled from 'styled-components';
import media from "../../common/utils/styles";
const Styled = {};
Styled.Wrapper = styled.div`
  background-color: red;
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
    left: 0%;
    &.datacard-appear{
      left: -100%;
    }
  
    &.datacard-appear-active{
      left: 0%;
      transition: all 1000ms ease-out;
    }
  }
`;
const DataCard = ({className}) => {
  return (
    <Styled.Wrapper className={className}>
    
    </Styled.Wrapper>
  );
};

export default DataCard;
