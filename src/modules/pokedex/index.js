import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

import Typography from "@material-ui/core/Typography";

import Content from "../common/components/layout/Content";
import NavPokedex from "./components/NavPokedex";
import StatsBox from "./components/StatsBox";
import FigurePokemon from "./components/FigurePokemon";
import InfoBox from "./components/infoBox";

const Styled = {};

Styled.PokemonSection = styled.section`
  padding: 0 16px;
`;

class Index extends Component {
  render() {
    return (
      <>
        <Content>
          <NavPokedex />
          <Styled.PokemonSection>
            <Typography variant={"h4"} style={{ marginBottom: '1.5rem'}} align={"center"}>
              Bulbasaur <span style={{color: 'gray'}}>#001</span>
            </Typography>
            <FigurePokemon url={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}/>
            <StatsBox />
            <Typography variant="body1" style={{ marginBottom: "1.5rem" }} color={"inherit"} className="title">
              Bulbasaur can be seen napping in bright sunlight.
              There is a seed on its back. By soaking up the sun's rays,
              the seed grows progressively larger.
            </Typography>
            <InfoBox />
          </Styled.PokemonSection>
        </Content>
      </>
    );
  }
}

export default Index;
