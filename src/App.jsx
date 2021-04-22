import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import logo from 'url:./imgs/logo512.png';
import store from './store';
import './styles/App.css';
import Router from './router/index';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App-title">FastReactApp</p>
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
