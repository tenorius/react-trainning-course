import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';


const Pokedex = lazy(() => import('../pokedex/index'));
const Search = lazy(() => import('../search/index'));
const MyPokemon = lazy(() => import('../myPokemon/index'));


class Routes extends Component {
  render() {
    return (
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/my-pokemon" component={MyPokemon} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/pokedex" component={Pokedex} />
          <Redirect to={{ pathname: '/search' }} />
        </Switch>
      </Suspense>
    );
  }
}
export default Routes;