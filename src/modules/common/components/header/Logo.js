import React from 'react';
import styled from 'styled-components';

const Styled = {};
Styled.Wrapper = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = () => {
  return (
    <Styled.Wrapper>
      <a href="">Logo</a>
    </Styled.Wrapper>
  );
};

export default Logo;
