/**
 * @description product card styling
 */

import { styled, Paper, Stack } from "@mui/material";

// product card wrapper
export const ProductCardWrapper = styled(Paper)(() => ({
  width: 457,
  height: 205,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  margin: "1rem",
  "&:hover": {
    cursor: "pointer",
    "& .cardImg": {
      transform: "scale(1.1)",
      transition: "all .5s ease-in-out",
    },
    overflow: "hidden",
  },
}));

// product card details
export const ProductCardDetails = styled(Stack)(() => ({
  width: "50%",
  height: 205,
  padding: "1rem",
}));

// product card image
export const ProductCardImg = styled("img")(() => ({
  width: "50%",
  height: 205,
}));
