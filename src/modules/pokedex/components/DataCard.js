import React from 'react';
import styled from 'styled-components';
const Styled = {};
Styled.Wrapper = styled.div`
  background-color: red;
  height: 300px;
  width: 400px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0%,-50%);
`;
const DataCard = () => {
  return (
    <Styled.Wrapper>
    
    </Styled.Wrapper>
  );
};

export default DataCard;
