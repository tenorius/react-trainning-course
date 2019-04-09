import React from 'react';
import styled from 'styled-components';
const Styled = {};
Styled.Wrapper = styled.nav`
  ul{
    list-style: none;
  }
  li{
    display: inline-block;
    margin: 0 20px 0 0;
  }
`;
const Nav = () => {
  return (
    <Styled.Wrapper>
      <ul>
        {['Link 1', 'Link 2', 'Link 3'].map((link)=>(
          <li><a>{link}</a></li>
        ))}
      </ul>
    </Styled.Wrapper>
  );
};

export default Nav;
