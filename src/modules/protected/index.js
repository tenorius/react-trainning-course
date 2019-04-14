import React, { Suspense } from 'react';

import Header from "../common/components/layout/Header";
import Main from "../common/components/layout/Main";
import Routes from "./Routes";
import Nav from "../common/components/layout/Nav";

const AppLayout = () => {
  return (
    <>
      <Header className="App-header" />
      <Main>
        <Suspense fallback={null}>
          <Routes/>
        </Suspense>
      </Main>
      <Nav/>
    </>
  );
};

export default AppLayout;