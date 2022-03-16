import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "../src/styles/GlobalStyle";
import Typography from "../src/styles/Typography";
import App from "./App";
ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>,
  document.getElementById("root")
);
