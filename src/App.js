/**
 * @desciption Entire App Application
 */

import { CssBaseline } from "@mui/material";
import React from "react";
// pages
import { Home, Login } from "./pages";
//css
import "./app.css";
// react router
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <div>
      <CssBaseline />
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
