/**
 * @section title styling
 */

import { styled, Typography } from "@mui/material";
import { Box, positions } from "@mui/system";

// colors
import { colors } from "../../../themes/theme";

export const SectionBar = styled(Box)(() => ({
  height: 2,
  backgroundColor: colors.mid_gray,
  margin: "2rem 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const TitleText = styled(Typography)(({ bgColor, width }) => ({
  top: "50%",
  right: "50%",
  height: 40,
  width: width ? width : 180,
  backgroundColor: bgColor ? bgColor : colors.light_gray,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: colors.dark_grey,
  fontSize: 30,
  fontWeight: 500,
}));
