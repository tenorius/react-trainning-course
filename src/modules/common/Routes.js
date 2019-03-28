import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';


const Pokedex = lazy(() => import('../pokedex/index'));

/**
 * Defines components to routes mapping.
 *
 * Everytime a new view is created, entry is required here to map the component to a specific route.
 *
 * [IMPORTANT]
 * All route entries are required to be done before the notFound component.
 *
 * @returns {XML}
 */

class Routes extends Component {
  render() {
    return (
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/pokedex" component={Pokedex} />
        </Switch>
      </Suspense>
    );
  }
}
export default Routes;