/**
 * @description the filter sidebar that appears on allproducts page
 */

import React from "react";
// side bar components
import CategoryFilter from "./CategoryFilter";
import ShopbyFilter from "./ShopbyFilter";
const FilterProductsSideBar = () => {
  return (
    <>
      <CategoryFilter />
      <ShopbyFilter />
    </>
  );
};

export default FilterProductsSideBar;
