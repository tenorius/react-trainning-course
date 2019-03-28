import React from 'react';
import styled from 'styled-components';
const Styled = {};
Styled.Wrapper = styled.div`
  background-color: yellow;
  height: 600px;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;
const Pokemon = () => {
  return (
    <Styled.Wrapper>
    
    </Styled.Wrapper>
  );
};

export default Pokemon;
