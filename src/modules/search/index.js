import React, { Component } from 'react';
import styled from 'styled-components';
import Background from "../common/components/layout/Background";
import Content from "../common/components/layout/Content";

const Styled = {};
Styled.SearchContainer = styled.div`
  background-color: red;
  padding: 16px;
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

Styled.Button = styled.button`
  border-radius: 0 8px 8px 0;
  height: 32px;
  color: white;
  background-color: orangered;
  border: 1px solid white;
`;

Styled.P = styled.p`
  color: white;
`;

Styled.ResultsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 16px;
  list-style: none;
  margin: 0;
`;

Styled.PokemonCard = styled.li`
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
     i {
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



class Index extends Component {
  render() {
    return (
      <>
        {/*<Background/>*/}
        <Content>
          <Styled.SearchContainer>
            <Styled.Label>
              Name or Number
            </Styled.Label>
            <Styled.Input type="text" name="search" placeholder="Search..." />
            <Styled.Button>Search</Styled.Button>
            <Styled.P>
              Use the Advanced Search to explore Pokémon by type, weakness, Ability, and more!
            </Styled.P>
          </Styled.SearchContainer>
          <Styled.ResultsContainer>
            <Styled.PokemonCard>
              <div className="figure">
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"} alt={"bumba"}/>
              </div>
              <div className="actions">
                <i className="far fa-clock"></i>
                <i className="far fa-clock"></i>
                <i className="far fa-clock"></i>
              </div>
              <div className="info">
              
              </div>
            </Styled.PokemonCard>
            <Styled.PokemonCard>
            
            </Styled.PokemonCard>
          </Styled.ResultsContainer>
        </Content>
      </>
    );
  }
}

export default Index;
