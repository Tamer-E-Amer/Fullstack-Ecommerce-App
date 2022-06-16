/**
 * @description all products page
 */

import React from "react";
import Navbar from "../../components/utility/appbar";
import Footer from "../../components/utility/footer/Footer";
import PageHeader from "../../components/utility/pageHeader/PageHeader";
// img
import headerImg1 from "../../assets/imgs/headerImg1.png";
const AllProducts = () => {
  return (
    <>
      <Navbar />
      <PageHeader title="Best seller Products" img={headerImg1} />
      <Footer />
    </>
  );
};

export default AllProducts;
