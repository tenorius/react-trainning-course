import React, { Component } from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Background from "../common/components/layout/Background";
import Content from "../common/components/layout/Content";
import SearchIcon from '@material-ui/icons/Search';
import HeartIcon from '@material-ui/icons/Favorite';
import PokeballIcon from '@material-ui/icons/Album';
import TurnIcon from '@material-ui/icons/Autorenew';
import Typography from "@material-ui/core/Typography/Typography";

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

Styled.P = styled.p`
  color: white;
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

Styled.PokemonCard = styled(Paper)`
   padding: 8px;
   border: 1px solid lightgray;
   border-radius: 6px;
   height: 250px;
   flex: 0 1 calc(50% - 8px);
   list-style: none;
   
   &:nth-child(odd) {
    margin: 0 8px 8px 0;
   }
   
   &:nth-child(even) {
    margin: 0 0 8px 8px;
   }
   
   .actions{
      display: flex;
      justify-content: center;
      background-color: white;
      width: 80%;
      margin: auto;
      margin-top: -16px;
      border-radius: 32px 32px 0 0;
      z-index: 2;
      position: relative;
     svg {
       margin: 0 6px;
     }
   }
   .figure {
      height: 150px;
      width: 100%;
      overflow: hidden;
      position: relative;
      background-color: aliceblue;
   
      img{
        width: 100%;
        height: auto;
        transform: scale(2);
        position: absolute;
      }
   }
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
          <Styled.ResultsContainer>
            <Styled.PokemonCard>
              <div className="figure">
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"} alt={"bumba"}/>
              </div>
              <div className="actions">
                <HeartIcon />
                <PokeballIcon />
                <TurnIcon />
              </div>
              <div className="info">
                <Typography variant="caption" color="inherit" >
                  #001
                </Typography>
                <Typography variant="h6" color="inherit" >
                  Bulbasaur
                </Typography>
                <Chip label="Grass"/>
                <Chip label="Venom"/>
              </div>
            </Styled.PokemonCard>
            <Styled.PokemonCard>
            
            </Styled.PokemonCard>
          </Styled.ResultsContainer>
          {PaginationComponent}
        </Content>
      </>
    );
  }
}

export default Index;
