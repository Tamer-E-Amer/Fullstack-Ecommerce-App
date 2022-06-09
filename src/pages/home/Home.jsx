/**
 * @description Home page
 */
import React from "react";
// application components
import Navbar from "../../components/utility/appbar";
import WelcomeBanner from "../../components/home/welcomeBanner/WelcomeBanner";
import AdvantagesContainer from "../../components/home/advantages/advantageCard/AdvantagesContainer";
import HotDeals from '../../components/home/hotDeals/HotDeals'
const Home = () => {
  return (
    <>
      <Navbar />
      <WelcomeBanner />
      <AdvantagesContainer />
      <HotDeals/>
    </>
  );
};

export default Home;
