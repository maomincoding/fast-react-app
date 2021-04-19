import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "./router/index.js";
import { Provider } from 'react-redux';
import store from './store/';
import "./styles/App.css";
import logo from "url:./imgs/logo512.png";

function App() {
  return (
    <div className="App">
         <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
