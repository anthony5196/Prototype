import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { Themes } from "./Themes/Themes";

ReactDOM.render(
  <ThemeProvider theme={Themes}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
