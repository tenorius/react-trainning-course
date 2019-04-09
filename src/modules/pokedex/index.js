import React, { Component } from 'react';
import Background from "../protected/components/layout/Background";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import PreviousIcon from '@material-ui/icons/ArrowBackIos';
import NextIcon from '@material-ui/icons/ArrowForwardIos';
import Typography from "@material-ui/core/Typography";

import Content from "../protected/components/layout/Content";

const Styled = {};
Styled.NavContainer = styled(Grid)`
  margin-bottom: 1.5rem;
`;

Styled.NavButton = styled(Button)`
  width: 50%;
`;

Styled.PokemonSection = styled.section`
  padding: 0 16px;
`;

Styled.PokemonPicture = styled.section`
  height: 300px;
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: aliceblue;
  margin-bottom: 1.5rem;
  img{
    width: 100%;
    height: auto;
    transform: scale(2);
    position: absolute;
  }
  
`;

Styled.PokemonActions = styled.div`

`;

Styled.StatsDisplay = styled.div`
  background-color: dimgray;
  position: relative;
  padding: 16px;
  height: 200px;
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  
  .title{
    position: absolute;
    top: 16px;
  }
  
  .bar {
    flex: 1;
    background-color: white;
    height: 50px;
    margin: 0 4px 1.5rem;
    position: relative;
    &:after{
      content: "teste";
      position: absolute;
      bottom: -1.5rem;
      
    }
  }
`;

Styled.Info = styled(Grid)`
  background-color: cornflowerblue;
  position: relative;
  padding: 16px;
  height: 200px;
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1.5rem;
`;

Styled.InfoText = styled(TextField)`
  flex: 1 1 50%;
  margin: 0!important;
  div:after, div:before{
    border-bottom: none!important;
  }
`;

class Index extends Component {
  render() {
    return (
      <>
        {/*<Background/>*/}
        <Content>
          <Styled.NavContainer container>
            <Styled.NavButton variant="outlined" color="secondary">
              <PreviousIcon />
              #900
            </Styled.NavButton>
            <Styled.NavButton variant="outlined" color="secondary">
              #002
              <NextIcon />
            </Styled.NavButton>
          </Styled.NavContainer>
          <Styled.PokemonSection>
            <Typography variant={"h4"} gutterBottom={"1.5rem"} align={"center"} color={"inherit"} >
              Bulbasaur #001
            </Typography>
            <Styled.PokemonPicture>
              <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"} alt={"bumba"}/>
            </Styled.PokemonPicture>
            <Styled.StatsDisplay>
              <Typography variant="h6" color={"inherit"} className="title">
                Stats
              </Typography>
              <div className="bar">
              
              </div><div className="bar">
              
              </div><div className="bar">
              
              </div><div className="bar">
              
              </div><div className="bar">
              
              </div><div className="bar">
              
              </div>
            </Styled.StatsDisplay>
            <Typography variant="body1" style={{ marginBottom: "1.5rem" }} color={"inherit"} className="title">
              Bulbasaur can be seen napping in bright sunlight.
              There is a seed on its back. By soaking up the sun's rays,
              the seed grows progressively larger.
            </Typography>
            <Styled.Info container wrap direction="row">
              <Styled.InfoText
                id="height"
                label="height"
                placeholder="Placeholder"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                />
              <Styled.InfoText
                id="height"
                label="height"
                placeholder="Placeholder"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                />
              <Styled.InfoText
                id="height"
                label="height"
                placeholder="Placeholder"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                />
              <Styled.InfoText
                id="height"
                label="height"
                placeholder="Placeholder"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                />
              <Styled.InfoText
                id="height"
                label="height"
                placeholder="Placeholder"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                />
            </Styled.Info>
          </Styled.PokemonSection>
        </Content>
      </>
    );
  }
}

export default Index;
