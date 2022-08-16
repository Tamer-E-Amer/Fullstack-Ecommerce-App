/**
 * @desciption Entire App Application
 */

import { CssBaseline } from "@mui/material";
import React from "react";
// pages
import {
  Home,
  Login,
  Register,
  AllProducts,
  ProductDetails,
  ShopingCart,
  // admin pages
  ChangePassword,
  UpdateProfile,
  AddCategory,
  AddSubCategory,
  AddProduct,
  AddBrand,
} from "./pages";
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
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<ShopingCart />} />
          {/* admin routers */}
          <Route
            path="/admin/profile/changePassword/:userId"
            element={<ChangePassword />}
          />
          <Route
            path="/admin/profile/updatemyprofile/:userId"
            element={<UpdateProfile />}
          />
          <Route
            path="/admin/products/addCategory/"
            element={<AddCategory />}
          />
          <Route
            path="/admin/products/addSubCategory/"
            element={<AddSubCategory />}
          />
          <Route path="/admin/products/addProduct/" element={<AddProduct />} />
          <Route path="/admin/products/addBrand" element={<AddBrand />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
