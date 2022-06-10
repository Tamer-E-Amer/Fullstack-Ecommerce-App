/**
 * @description product card styling
 */

import { styled, Paper, Stack } from "@mui/material";

// product card wrapper
export const ProductCardWrapper = styled(Paper)(({ theme }) => ({
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
  // responsive
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    width: "100%",
    height: "auto",
  },
}));

// product card details
export const ProductCardDetails = styled(Stack)(({ theme }) => ({
  width: "50%",
  height: 205,
  padding: "1rem",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "Center",
  },
}));

// product card image
export const ProductCardImg = styled("img")(({ theme }) => ({
  width: "50%",
  height: 205,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
