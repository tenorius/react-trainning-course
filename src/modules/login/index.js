import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Background from "../protected/components/layout/Background";
import Content from "../protected/components/layout/Content";
import Typography from "@material-ui/core/Typography";
import fakeAuth from "../common/utils/fakeAuth";
const Styled = {};
Styled.Content = styled(Content)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

Styled.LoginBox = styled(Paper)`
  background-color: #3f51b5!important;
  color: white;
  padding: 16px;
  width: 300px;
  height: 300px;
`;

Styled.LoginTextField = styled(TextField)`
  input {
    color: white!important;
  }
  label{
    color: white!important;
    font-weight: 500;
  }
  //> div::before{
  //  border-bottom-color: white !important;
  //}
  //> div::after{
  //  border-bottom-color: white !important;
  //}
`;



class Index extends Component {
  
  render() {
    const { history } = this.props;
    return (
      <>
        {/*<Background/>*/}
        <Styled.Content>
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
