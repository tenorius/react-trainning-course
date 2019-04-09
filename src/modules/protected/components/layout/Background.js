import React from 'react';
import styled, { keyframes } from 'styled-components';
const Styled = {};

const slide = keyframes`
  from{
    background-position: 0;
  }
  to{
    background-position: -768px;
  }
`;

Styled.wrapper = styled.div`
  background-color: aqua;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-image: url("https://www.vision-advertising.com/wp-content/uploads/2016/07/Pok%C3%A9mon-768x283.png");
  background-repeat:  repeat-x;
  background-position: center;
  animation: ${slide} 7s linear infinite;
  z-index: 0;
`;

const Background = ({className}) => {
  return (
    <Styled.wrapper className={className} />
  );
};

export default Background;
