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
const Bag = ({className}) => {
  return (
    <Styled.Wrapper className={className}>
      <ul>
        {['link 4', 'Link 5'].map((link)=>(
          <li><a>{link}</a></li>
        ))}
      </ul>
    </Styled.Wrapper>
  );
};

export default Bag;