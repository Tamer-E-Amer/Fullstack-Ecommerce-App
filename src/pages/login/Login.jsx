/**
 * @description login page
 */

import React from "react";
import LoginFormContainer from "../../components/login/loginFormContainer/LoginFormContainer";
import Navbar from "../../components/utility/appbar";
import Footer from "../../components/utility/footer/Footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <LoginFormContainer />
      <Footer />
    </>
  );
};

export default Login;
