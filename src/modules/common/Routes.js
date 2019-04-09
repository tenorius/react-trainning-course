import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";

const Login = lazy(() => import('../login/index'));
const ProtectedArea = lazy(() => import('../protected/index'));

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
          <Route exact path="/login" component={Login} />
          <Route path="/" component={ProtectedArea} />
          <Redirect to={{ pathname: '/not-found' }} />
        </Switch>
      </Suspense>
    );
  }
}
export default Routes;