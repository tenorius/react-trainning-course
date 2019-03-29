import React from 'react';
import styled, { keyframes } from 'styled-components';
import media from "../../utils/styles";
const Styled = {};

Styled.wrapper = styled.section`
  Content-color: aqua;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  Content-image: url("https://www.vision-advertising.com/wp-content/uploads/2016/07/Pok%C3%A9mon-768x283.png");
  Content-repeat:  repeat-x;
  Content-position: center;
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
