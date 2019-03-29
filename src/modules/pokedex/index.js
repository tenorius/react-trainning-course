import React, { Component } from 'react';
import Background from "../common/components/layout/Background";
import Content from "../common/components/layout/Content";
import Pokemon from "./components/Pokemon";
import DataCard from "./components/DataCard";
import ActionsCard from "./components/ActionsCard";
import { CSSTransitionGroup } from 'react-transition-group'

class Index extends Component {
  render() {
    return (
      <>
        <Background/>
        <Content>
          <CSSTransitionGroup
            component={React.Fragment}
            transitionName="pokemon"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}
          >
            <Pokemon/>
          </CSSTransitionGroup>
          <CSSTransitionGroup
            component={React.Fragment}
            transitionName="datacard"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}
          >
            <DataCard/>
          </CSSTransitionGroup>
          <CSSTransitionGroup
            component={React.Fragment}
            transitionName="actioncard"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}
          >
            <ActionsCard/>
          </CSSTransitionGroup>
        </Content>
      </>
    );
  }
}

export default Index;
