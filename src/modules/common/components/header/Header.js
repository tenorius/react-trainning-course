import React, {Component} from 'react';
import styled from 'styled-components';
import Logo from "./Logo";
import Nav from "./Nav";
import Bag from "./Bag";

const Styled = {};
Styled.Wrapper = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 64px;
  background-color: lightgray;
`;
Styled.Bag = styled(Bag)`
  margin-left: auto;
`;

class Header extends Component {
  render() {
    return (
      <Styled.Wrapper>
        <Logo/>
        <Nav/>
        <Styled.Bag/>
      </Styled.Wrapper>
    );
  }
}

export default Header;