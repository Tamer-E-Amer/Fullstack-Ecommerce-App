/**
 * @description product suggestion component
 */
import React from "react";
// mui components
import { Stack } from "@mui/material";

// app components
import ProductSuggestionCard from "./ProductSuggestionCard";

// colors and themes
import { colors } from "../../../themes/theme";
// cart suggested products data
import { cartSuggestionProducts } from "../../../data/cartSuggestions";
const ProductSuggestion = () => {
  const suggestedCardsList = cartSuggestionProducts.map((product) => (
    <ProductSuggestionCard key={product.id} productData={product} />
  ));
  return (
    <>
      <Stack
        alignItems={"center"}
        spacing={2}
        sx={{ border: `1px solid ${colors.light_gray}` }}
        mt={2}
        height={"auto"}
        p={1}
      >
        {suggestedCardsList}
       
      </Stack>
    </>
  );
};

export default ProductSuggestion;
