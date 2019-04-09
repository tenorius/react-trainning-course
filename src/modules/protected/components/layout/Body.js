import React from 'react';
import styled from 'styled-components';
const Styled = {};
Styled.wrapper = styled.div`
  padding-top: 64px;
`;
const Body = ({className, children}) => {
  return (
    <Styled.wrapper className={className}>
      {children}
    </Styled.wrapper>
  );
};

export default Body;
