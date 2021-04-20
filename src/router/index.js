import React from "react";
import { Route } from "react-router";
import Home from "../views/Home/index.js";
import About from "../views/About/index.js";

const APPRouter = () => (
  <div>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/about" component={About} />
  </div>
);

export default APPRouter;
