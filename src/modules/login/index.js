import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Background from "../common/components/layout/Background";
import Content from "../common/components/layout/Content";
import Typography from "@material-ui/core/Typography";
import fakeAuth from "../common/utils/fakeAuth";
const Styled = {};
Styled.Content = styled(Content)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Styled.LoginBox = styled(Paper)`
  background-color: ${props => props.theme.palette.primary.light}!important;
  padding: 16px;
  width: 300px;
  height: 300px;
  color: white;
`;

Styled.LoginTextField = styled(TextField)`
  input {
    color: white!important;
  }
  label{
    color: white!important;
    font-weight: 500;
  }
  .MuiOutlinedInput-root-150 .MuiOutlinedInput-notchedOutline-157{
    // border-color: ${props => props.theme.palette.secondary.main} ;
  }

  .MuiOutlinedInput-root-150.MuiOutlinedInput-focused-151 .MuiOutlinedInput-notchedOutline-157{
    border-color: ${props => props.theme.palette.secondary.main} ;
  }
`;



class Index extends Component {
  
  render() {
    const { history } = this.props;
    return (
      <>
        <Background url={"https://media.giphy.com/media/u6Fsu4lYIDq5q/giphy.gif"} scrollX={500} duration={20}/>
        <Styled.Content>
          <a href="https://fontmeme.com/pokemon-font/" style={{display: 'block', margin: '1.5rem 0 3rem 0'}}>
            <img src="https://fontmeme.com/permalink/190412/2229f6585e65331eb8fe8d49498d0fb4.png" alt="pokemon-font" border="0" />
          </a>
          <Styled.LoginBox>
            <Typography variant={"h5"} color={"inherit"} align={"center"}>Login</Typography>
            <form noValidate autoComplete="off">
              <div style={{marginBottom : "1.5rem"}}>
                <Styled.LoginTextField
                  id="standard-full-width"
                  label="Email"
                  placeholder="Enter email"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Styled.LoginTextField
                  id="standard-full-width"
                  label="Password"
                  placeholder="Enter password"
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <Button
                variant={"contained"}
                color="secondary"
                fullWidth
                onClick={()=> {
                  fakeAuth.authenticate(
                    ()=>history.push('/pokedex')
                  )
                }}
              >
                Enter
              </Button>
            </form>
          </Styled.LoginBox>
        </Styled.Content>
      </>
    );
  }
}

export default withRouter(Index);
