import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login'

import Home from '../pages/Home';
import Details from '../pages/Details';

const App = () => (
  <Router>
    
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/details/:id" component={Details}/>
      <Route exact path="/" component={Home} />
    </Switch>
    
  </Router>
);

export default App;
