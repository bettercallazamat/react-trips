import React from 'react';
import {
  Route, BrowserRouter, Switch, Redirect,
} from 'react-router-dom';
import Nav from './containers/Nav';
import Home from './pages/Home';
import Trip from './pages/Trip';
import User from './pages/User';
import Page404 from './pages/Page404';

const Routes = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/Page404" component={Page404} exact />
      <Route path="/trip/:id" component={Trip} exact />
      <Route path="/profile" component={User} exact />
      <Redirect to="/Page404" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
