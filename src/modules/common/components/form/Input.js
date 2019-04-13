import React from 'react';
import styled, { css } from "styled-components";
import TextField from '@material-ui/core/TextField';

const noBorderBottom = () => css`
  div:after, div:before{
    border-bottom: none!important;
  }
`;

const contrast = () => css`
  .MuiFormLabel-root-246 {
    color: white;
    font-weight: 500;
  }
  .MuiInputBase-input-276 {
    color: white;
  }
  
  .MuiInput-underline-257:before {
    border-bottom: 1px solid white;
  }
  
  .MuiOutlinedInput-root-150 .MuiOutlinedInput-notchedOutline-157{
     border-color: white!important; ;
  }

  .MuiOutlinedInput-root-150.MuiOutlinedInput-focused-151 .MuiOutlinedInput-notchedOutline-157{
    border-color: ${props => props.theme.palette.secondary.main} ;
  }
`;

const Styled = {};
Styled.Wrapper = styled(TextField)`
  ${props => props.disabled ? noBorderBottom() : null}
  ${props => props.contrast ? contrast() : null}
`;

const Input = (props) => (
  <Styled.Wrapper contrast {...props} />
);


export default Input;
