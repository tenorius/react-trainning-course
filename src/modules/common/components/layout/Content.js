import React from 'react';
import styled, { keyframes } from 'styled-components';
const Styled = {};

Styled.wrapper = styled.section`
  padding-top: 56px;
  padding-bottom: 56px;
  overflow: scroll;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const Content = ({className, children}) => {
  return (
    <Styled.wrapper className={className} >
      {children}
    </Styled.wrapper>
  );
};

export default Content;
