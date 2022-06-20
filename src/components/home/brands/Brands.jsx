/**
 * @description brands section
 */

import React from "react";
// app components
import SectionTitle from "../../utility/sectionTitle/SectionTitle";
import BrandSwiper from "../../home/brands/BrandSwiper";
// mui components
import { Box, Container } from "@mui/material";

const Brands = () => {
  return (
    <Container>
      <SectionTitle title="Brands" bg="#fff" />
      <Box>
        <BrandSwiper />
      </Box>
    </Container>
  );
};

export default Brands;
