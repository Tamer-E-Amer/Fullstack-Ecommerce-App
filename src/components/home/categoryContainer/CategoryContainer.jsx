/**
 * @description contains the different categories in the system
 */

import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import SectionTitle from "../../utility/sectionTitle/SectionTitle";
import CategorySwiper from "./CategorySwiper";

const CategoryContainer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      <SectionTitle title="Categories" />
      <CategorySwiper isMobile={isMobile} isTablet={isTablet} />
    </div>
  );
};

export default CategoryContainer;
