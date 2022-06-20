/**
 * @description the filter sidebar that appears on allproducts page
 */

import { Box, Stack } from "@mui/material";
import React from "react";
// side bar components
import CategoryFilter from "./CategoryFilter";
import ShopbyFilter from "./ShopbyFilter";
const FilterProductsSideBar = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        // maxWidth: 280,
        bgcolor: "#fff",
        // margin: "0 auto",
      }}
      mb={2}
      // alignItems={{
      //   xs: "center",
      //   sm: "flex-start",
      //   md: "center",
      //   lg: "flex-start",
      // }}
      // justifyContent={{
      //   xs: "center",
      //   sm: "flex-start",
      //   md: "center",
      //   lg: "flex-start",
      // }}
      alignItems="flex-start"
      // justifyContent="center"
      spacing={1}
      direction={{ lg: "column", sm: "row", md: "column", xs: "column" }}
    >
      <CategoryFilter />
      <ShopbyFilter />
    </Stack>
  );
};

export default FilterProductsSideBar;
