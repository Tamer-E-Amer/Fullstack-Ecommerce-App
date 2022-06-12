/**
 * @description category swiper
 */

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import CategoryCard from "./CategoryCard";
// category Data
import { categoryData } from "../../../data/category";
// css
import "./index.css";
const CategorySwiper = ({ isMobile, isTablet }) => {
  const categoryList = categoryData.map((cat) => {
    return (
      <SwiperSlide
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CategoryCard key={cat.id} data={cat} />
      </SwiperSlide>
    );
  });
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
        style={{
          padding: "2rem",
        }}
      >
        {categoryList}
      </Swiper>
    </>
  );
};

export default CategorySwiper;
