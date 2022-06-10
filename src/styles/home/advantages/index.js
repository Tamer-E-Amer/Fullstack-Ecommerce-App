/**
 * @description advantage card styling
 */

import { Paper, styled, Box, Stack, Typography } from "@mui/material";
import { colors } from "../../../themes/theme";

// advantage card
export const AdvantageCardWrapper = styled(Paper)(() => ({
  width: 284,
  height: 153,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  margin: "1rem",
}));

// advantage text wrapper

export const TextWrapper = styled(Stack)(() => ({
  alignItems: "left",
  justifyContent: "space-between",
  width: "70%",
  padding: "1rem 0",
}));

// title
export const Title = styled(Typography)(() => ({
  color: colors.dark_grey,
  fontSize: 20,
}));
// Description
export const Description = styled(Typography)(() => ({
  color: colors.mid_gray,
  fontSize: 14,
}));

// AdvantagesWrapper
export const AdvantagesWrapper = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  flexDirection: "row",
  height: "auto",
}));
