import React from 'react';
import styled from 'styled-components';
const Styled = {};
Styled.wrapper = styled.main`
  background-color: cornflowerblue;
  overflow: auto;
`;
const Main = ({className, children}) => {
  return (
    <Styled.wrapper className={className}>
      {children}
    </Styled.wrapper>
  );
};

export default Main;
