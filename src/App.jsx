import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "./router/index.js";
import "./styles/App.css";
import logo from "url:./imgs/logo512.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-router">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
          <Router />
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
