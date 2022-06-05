/**
 * @description Home page
 */
import React from "react";
// application components
import Navbar from "../../components/utility/appbar";
import WelcomeBanner from "../../components/home/welcomeBanner/WelcomeBanner";
import AdvantagesContainer from "../../components/home/advantages/advantageCard/AdvantagesContainer";
const Home = () => {
  return (
    <>
      <Navbar />
      <WelcomeBanner />
      <AdvantagesContainer />
    </>
  );
};

export default Home;
