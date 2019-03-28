import React from 'react';
import styled from 'styled-components';
const Styled = {};
Styled.Wrapper = styled.div`
  background-color: blue;
  height: 300px;
  width: 400px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0%,-50%);
`;
const ActionsCard = () => {
  return (
    <Styled.Wrapper>
    
    </Styled.Wrapper>
  );
};

export default ActionsCard;
