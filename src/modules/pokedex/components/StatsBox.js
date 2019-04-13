import React from 'react';
import styled from 'styled-components';
import Typography from "@material-ui/core/Typography/Typography";
const Styled = {};
Styled.Wrapper = styled.div`
  background-color: ${props => props.theme.palette.grey.A200};
  position: relative;
  padding: 16px;
  height: 200px;
  width: 100%;
  border-radius: ${props => props.theme.shaping.borderRadius * 4}px;
  margin-bottom: ${props => props.theme.spacing.unit * 2}px;
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
const StatsBox = ({stats}) => {
  
  return (
    <Styled.Wrapper>
      <Typography variant="h6" className="title">
        Stats
      </Typography>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </Styled.Wrapper>
  );
};

export default StatsBox;
