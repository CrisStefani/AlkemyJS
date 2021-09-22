import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/Home.js';
import Login from '../pages/Login.js';

import Navbar from '../components/Navbar'




function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>

      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;