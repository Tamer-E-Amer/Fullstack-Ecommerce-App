/**
 * @desciption Entire App Application
 */

import { CssBaseline } from "@mui/material";
import React from "react";
// pages
import { Home } from "./pages";
//css
import "./app.css";
const App = () => {
  return (
    <div>
      <CssBaseline />
      <Home />
    </div>
  );
};

export default App;
