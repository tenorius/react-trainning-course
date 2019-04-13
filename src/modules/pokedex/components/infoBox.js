import React from 'react';
import styled from 'styled-components';
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import Input from "../../common/components/form/Input";
const Styled = {};

Styled.Wrapper = styled(Grid)`
  background-color: ${props => props.theme.palette.secondary.light};
  position: relative;
  padding: 16px;
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1.5rem;
`;

Styled.InfoText = styled(Input)`
  flex: 0 1 calc(50% - 8px);
  margin: 4px!important;
`;

const InfoBox = ({}) => {
  
  return (
    <Styled.Wrapper container wrap direction="row">
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
    </Styled.Wrapper>
  );
};

export default InfoBox;
