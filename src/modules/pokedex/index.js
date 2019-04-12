import React, { Component } from 'react';
import Background from "../common/components/layout/Background";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import PreviousIcon from '@material-ui/icons/ArrowBackIos';
import NextIcon from '@material-ui/icons/ArrowForwardIos';
import Typography from "@material-ui/core/Typography";

import Content from "../common/components/layout/Content";

const Styled = {};

Styled.NavButton = styled(Button)`
  color: ${props => props.theme.palette.text.secondary}!important;
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
          <Grid container justify="space-between" style={{ marginBottom: '0.5rem'}}>
            <Styled.NavButton>
              <PreviousIcon fontSize={"small"}/>
              #900
            </Styled.NavButton>
            <Styled.NavButton>
              #002
              <NextIcon fontSize={"small"} />
            </Styled.NavButton>
          </Grid>
          <Styled.PokemonSection>
            <Typography variant={"h4"} style={{ marginBottom: '1.5rem'}} align={"center"}>
              Bulbasaur <span style={{color: 'gray'}}>#001</span>
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
