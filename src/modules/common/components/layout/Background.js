import React from 'react';
import styled, { keyframes } from 'styled-components';
const Styled = {};

const slide = (scrollX) => keyframes`
  from{
    background-position: 0;
  }
  to{
    background-position: -${scrollX}px;
  }
`;

Styled.wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat:  repeat-x;
  animation: ${props => slide(props.scrollX)} ${props => props.duration}s linear infinite alternate;
  z-index: 0;
`;

const Background = ({className, url, scrollX, duration}) => {
  return (
    <Styled.wrapper className={className} url={url} scrollX={scrollX} duration={duration}/>
  );
};

export default Background;
