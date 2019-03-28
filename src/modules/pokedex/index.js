import React, { Component } from 'react';
import Background from "../common/components/layout/Background";
import Content from "../common/components/layout/Content";
import Pokemon from "./components/Pokemon";
import DataCard from "./components/DataCard";
import ActionsCard from "./components/ActionsCard";

class Index extends Component {
  render() {
    return (
      <>
        <Background/>
        <Content>
          <Pokemon/>
          <DataCard/>
          <ActionsCard/>
        </Content>
      </>
    );
  }
}

export default Index;
