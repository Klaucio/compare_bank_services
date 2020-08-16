import React from 'react';

import Layout from './hoc/Layout/Layout'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Home from './containers/Home/Home';
import Compare from './containers/Compare/Compare';

import './App.css';

function App() {

  let routes = (
    <Switch>
      <Route path="/contacte-nos" component={  Home} />
      <Route path="/sobre-nos" component={ Home } />
      <Route path="/compare" component={ Compare} />
      <Route path="/" exact component= { Home } />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Layout>
      {routes}
    </Layout>
  );
}

export default App;
