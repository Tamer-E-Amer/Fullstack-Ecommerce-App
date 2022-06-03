/**
 * @description Appbar styling
 */

import { Box, styled } from "@mui/material";
// theme
import { colors } from "../../../themes/theme";
export const AppbarWrapper = styled(Box)(() => ({
  height: 80,
  width: "100%",
  backgroundColor: colors.dark_grey,
  display: "flex",
  alignItems: "center",
}));
