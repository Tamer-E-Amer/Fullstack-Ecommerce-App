/**
 * @description barnds swiper
 */

import React from "react";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
// app components
import BrandLogo from "./BrandLogo";

// import brands data
import { brandDataLogos } from "../../../data/brands";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
const BrandSwiper = () => {
  // test screen size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  // map through brands data
  const brandData = brandDataLogos.map((brand) => {
    return (
      <SwiperSlide
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BrandLogo key={brand.id} logo={brand.logo} />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      spaceBetween={50}
      slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
      style={{
        padding: "3rem",
      }}
    >
      {brandData}
    </Swiper>
  );
};

export default BrandSwiper;
