/**
 * @desciption Entire App Application
 */

import { CssBaseline } from "@mui/material";
import React from "react";
// pages
import { Home, Login, Register, AllProducts } from "./pages";
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
          <Route path="/register" element={<Register />} />
          <Route path="/allproducts" element={<AllProducts />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
