import { ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDom from "react-dom";
// App
import App from "./App";
// theme
import { theme } from "./themes/theme";
ReactDom.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById("root")
);
