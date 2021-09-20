import React from 'react';
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Trip from './pages/Trip';
import User from './pages/User';
import Page404 from './pages/Page404';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Page404" component={Page404} exact />
      <Route path="/trip/:id" component={Trip} exact />
      <Route path="/user/:id" component={User} exact />
      <Redirect to="/Page404" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
