/**
 * @description Home page
 */
import React from "react";
// application components
import Navbar from "../../components/utility/appbar";
import WelcomeBanner from "../../components/home/welcomeBanner/WelcomeBanner";
const Home = () => {
  return (
    <>
      <Navbar />
      <WelcomeBanner />
    </>
  );
};

export default Home;
