import React from "react";
import { Route } from "react-router";
import Home from "../views/Home/index.jsx";
import About from "../views/About/index.jsx";

const APPRouter = () => (
  <div>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/about" component={About} />
  </div>
);

export default APPRouter;
