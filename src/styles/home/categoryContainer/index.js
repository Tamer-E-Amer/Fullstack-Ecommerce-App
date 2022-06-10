/**
 * @description category styling
 */

// ctaegoryCard

// colors
import { Box, styled, Typography } from "@mui/material";
import { colors } from "../../../themes/theme";

export const CatCardWrapper = styled(Box)(() => ({
  height: 554,
  width: 457,
  borderRadius: 10,
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    cursor: "pointer",
    "& .cardTitle": {
      transform: "translate(0, -140px)",
    },
  },

  overflow: "hidden",
  margin: "1rem",
}));

// card labl appears with hover

export const GreenCardTitle = styled(Typography)(() => ({
  height: 140,
  width: 457,
  borderRadius: 10,
  position: "absolute",
  bottom: -140,
  //   right: 0,
  backgroundColor: colors.green,
  opacity: "85%",
  transition: "all .3s ease-in-out",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
