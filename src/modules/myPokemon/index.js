import React, { Component } from 'react';
import styled from 'styled-components';
import Content from "../protected/components/layout/Content";
import PokemonCard from "../common/components/PokemonCard";

const Styled = {};
Styled.SearchContainer = styled.div`
  background-color: lightgray;
  padding: 16px;
  margin-bottom: 1.5rem;

`;

class Index extends Component {
  render() {
    return (
      <>
        {/*<Background/>*/}
        <Content>
          <PokemonCard/>
        </Content>
      </>
    );
  }
}

export default Index;
