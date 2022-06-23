/**
 * @description shoping cart page
 */
import React from "react";
// application components
import Navbar from "../../components/utility/appbar";
import Footer from "../../components/utility/footer/Footer";
import PageHeader from "../../components/utility/pageHeader/PageHeader";
import CartListContainer from "../../components/shopingCart/CartListContainer";
// imgs
import headerImg2 from "../../assets/imgs/headerImg2.png";
const ShopingCart = () => {
  return (
    <>
      <Navbar />
      <PageHeader title="Shoping cart" img={headerImg2} />
      <CartListContainer />
      <Footer />
    </>
  );
};

export default ShopingCart;
