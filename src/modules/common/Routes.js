import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute";
import routeRegistry from "./utils/routesRegistry";

const Login = lazy(() => import('../login/index'));
const ProtectedArea = lazy(() => import('../protected/index'));

const routes = [
  {
    path: "/login",
    component: Login,
    exact: true,
    name: "Login"
  },
  {
    path: "/",
    component: ProtectedArea,
    exact: false,
  },
];
const otherwise = "/not-found";

routeRegistry.register(routes);

class Routes extends Component {
  render() {
    return (
      <Suspense fallback={null}>
        <Switch>
          {routes.map((route)=>(
            <Route exact={route.exact} path={route.path} component={route.component} />
          ))}
          <Redirect to={{ pathname: otherwise }} />
        </Switch>
      </Suspense>
    );
  }
}
export default Routes;