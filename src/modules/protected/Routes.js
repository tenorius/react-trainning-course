import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import routeRegistry from '../common/utils/routesRegistry'

const Pokedex = lazy(() => import('../pokedex/index'));
const Search = lazy(() => import('../search/index'));
const MyPokemon = lazy(() => import('../myPokemon/index'));


const routes = [
  {
    path: "/my-pokemon",
    component: MyPokemon,
    exact: true,
    name: "My Pokemon",
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