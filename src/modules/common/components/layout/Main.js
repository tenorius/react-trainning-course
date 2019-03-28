import React from 'react';
import styled from 'styled-components';
const Styled = {};
Styled.wrapper = styled.div`
  background-color: cornflowerblue;
`;
const Main = ({className, children}) => {
  return (
    <Styled.wrapper className={className}>
      {children}
    </Styled.wrapper>
  );
};

export default Main;
