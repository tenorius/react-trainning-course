import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Background from "../protected/components/layout/Background";
import Content from "../protected/components/layout/Content";
import SearchIcon from '@material-ui/icons/Search';

import Typography from "@material-ui/core/Typography";
import PokemonCard from "../common/components/PokemonCard";
import PokemonCardList from "../common/components/PokemonCardList";

const Styled = {};
Styled.SearchContainer = styled.div`
  background-color: lightgray;
  padding: 16px;
  margin-bottom: 1.5rem;

`;

Styled.Label = styled.label`
  color: white;
  display: block;
  margin: 8px 0;
  font-size: 1.5rem;
`;

Styled.Input = styled.input`
  border-radius: 8px 0 0 8px;
  height: 34px;
`;

Styled.SearchButton = styled(Button)`
  height: 56px;
  color: white;
  margin: 4px 0 0 8px!important;
`;

Styled.PaginationButton = styled(Button)`
  width: 84px!important;
`;

Styled.ResultsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 0 16px;
  list-style: none;
  margin: 0;
  margin-bottom: 1.5rem;
  
`;

Styled.PaginationContainer = styled(Grid)`
  margin-bottom: 1.5rem;
`;



const PaginationComponent = (
  <Styled.PaginationContainer container justify="space-around">
    <Styled.PaginationButton  color="secondary" size="small">
      Previous
    </Styled.PaginationButton>
    <Typography variant="caption" color="inherit">
      1 - 20
    </Typography>
    <Styled.PaginationButton  color="secondary" size="small">
      Next
    </Styled.PaginationButton>
  </Styled.PaginationContainer>
);

class Index extends Component {
  render() {
    return (
      <>
        {/*<Background/>*/}
        <Content>
          <Styled.SearchContainer>
            <form noValidate autoComplete="off">
              <Grid
                container
                direction="row"
                justify=""
                alignItems="center"
              >
                <TextField
                  id="outlined-name"
                  label="Name or ID"
                  value={""}
                  onChange={()=>{}}
                  margin="normal"
                  variant="outlined"
                />
                <Styled.SearchButton variant="contained" color="primary">
                  <SearchIcon />
                </Styled.SearchButton>
              </Grid>
              <Typography variant="body1" color="inherit" >
                Use the Advanced Search to explore Pokémon by type, weakness, Ability, and more!
              </Typography>
            </form>
          </Styled.SearchContainer>
          {PaginationComponent}
          <PokemonCardList>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
          </PokemonCardList>
          {PaginationComponent}
        </Content>
      </>
    );
  }
}

export default Index;
