import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routeRegistry from '../common/utils/routesRegistry'

const Pokedex = lazy(() => import('../pokedex/index'));
const Search = lazy(() => import('../search/index'));
const Team = lazy(() => import('../team/index'));


const routes = [
  {
    path: "/team",
    component: Team,
    exact: true,
    name: "My Team",
  },
  {
    path: "/search",
    component: Search,
    exact: true,
    name: "Search",
  },
  {
    path: "/pokedex",
    component: Pokedex,
    exact: true,
    name: "Pokedex",
  },
];

const otherwise = "/search";

routeRegistry.register(routes);

const Routes = () => (
  <Suspense fallback={null}>
    <Switch>
      {routes.map((route)=>(
        <Route exact path={route.path} component={route.component} />
      ))}
      <Redirect to={{ pathname: otherwise }} />
    </Switch>
  </Suspense>
);

export default Routes;