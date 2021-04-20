import React from 'react';
import { Route } from 'react-router';
import Home from '../views/Home/index';
import About from '../views/About/index';

const APPRouter = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </div>
);

export default APPRouter;
