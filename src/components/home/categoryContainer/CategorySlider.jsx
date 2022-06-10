/**
 * @description slider of teh category cards
 */

import React from "react";
import CategoryCard from "./CategoryCard";
// mui components
import { Box } from "@mui/material";
// category Data
import { categoryData } from "../../../data/category";

const CategorySlider = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    setCategories(categoryData);
  }, []);

  // map throught category state

  const categoryList = categories.map((cat) => {
    return <CategoryCard key={cat.id} data={cat} />;
  });
  return (
    <>
      <Box sx={{ display: "flex" }}>{categoryList}</Box>
    </>
  );
};

export default CategorySlider;
