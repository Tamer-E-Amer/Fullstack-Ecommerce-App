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

// import brands data
import { hotDealsData } from "../../../data/hotDeals";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import ProductCard from "../../utility/products/ProductCard";
const SuggestedProducts = () => {
  // test screen size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  // map through brands data
  const brandData = hotDealsData.map((product) => {
    return (
      <SwiperSlide
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        key={product.id}
      >
        <ProductCard productData={product} />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      spaceBetween={50}
      slidesPerView={isMobile ? 1 : isTablet ? 1 : 2}
      style={{
        padding: "3rem",
      }}
    >
      {brandData}
    </Swiper>
  );
};

export default SuggestedProducts;
