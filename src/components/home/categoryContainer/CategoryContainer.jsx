/**
 * @description contains the different categories in the system
 */

import React from "react";
import SectionTitle from "../../utility/sectionTitle/SectionTitle";
import CategorySlider from "./CategorySlider";

const CategoryContainer = () => {
  return (
    <div>
      <SectionTitle title="Categories" />
      <CategorySlider />
    </div>
  );
};

export default CategoryContainer;
