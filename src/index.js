import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import reportWebVitals from "./common/reportWebVitals.js";
import "./styles/index.css";
// import "antd/dist/antd.css";
import "./styles/reset.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
