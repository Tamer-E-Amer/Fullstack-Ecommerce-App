/**
 * @description register page
 */

import React from "react";
// app components
import Navbar from "../../components/utility/appbar";
import Footer from "../../components/utility/footer/Footer";
import RegisterFormContainer from "../../components/register/RegisterFormContainer";
const Register = () => {
  return (
    <>
      <Navbar />
      <RegisterFormContainer />
      <Footer />
    </>
  );
};

export default Register;
