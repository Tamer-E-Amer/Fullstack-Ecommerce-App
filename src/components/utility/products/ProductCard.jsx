/**
 * @description this component renders the productItem card.
 */

import React from "react";
// styled components
import {
  ProductCardWrapper,
  ProductCardDetails,
  ProductCardImg,
} from "../../../styles/utility/productCard";
// mui components
import { Typography } from "@mui/material";
// imgs
import deal1 from "../../../assets/imgs/deal1.png";
import { colors } from "../../../themes/theme";
const ProductCard = (props) => {
  return (
    <ProductCardWrapper>
      <ProductCardDetails
        spacing={1}
        alignItems="center"
        justifyContent="center"
      >
        {/* price */}
        <Typography
          variant="h2"
          sx={{ color: colors.green, fontSize: 40, fontWeight: 800 }}
        >
          {props.productData.price}
        </Typography>
        {/* for what */}
        <Typography
          variant="subtitle"
          sx={{ color: colors.dark_grey, fontSize: 25, fontWeight: 500 }}
        >
          {props.productData.forWhat}
        </Typography>
        {/* text */}
        <Typography variant="body2" sx={{ color: colors.mid_gray }}>
          {props.productData.aboutProduct}
        </Typography>
      </ProductCardDetails>
      <ProductCardImg
        src={props.productData.productPicture}
        className="cardImg" //to be set in the styled component file
      />
    </ProductCardWrapper>
  );
};

export default ProductCard;
