import React from 'react';
import styled, { keyframes } from 'styled-components';
import media from "../../utils/styles";
const Styled = {};

Styled.wrapper = styled.section`
  padding-top: 64px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
  ${media.sm}{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Content = ({className, children}) => {
  return (
    <Styled.wrapper className={className} >
      {children}
    </Styled.wrapper>
  );
};

export default Content;
