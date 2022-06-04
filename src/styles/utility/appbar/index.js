/**
 * @description Appbar styling
 */

import { Box, Stack, styled, TextField } from "@mui/material";
// theme
import { colors } from "../../../themes/theme";

// appbar wraper
export const AppbarWrapper = styled(Box)(() => ({
  height: 100,
  width: "100%",
  backgroundColor: colors.dark_grey,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

// search components

// 1- search input wrapper
export const SearchInputWrapper = styled(Box)(({ theme }) => ({
  height: 47,
  width: 615,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    width: 300,
  },
}));

// 2- inputtext
export const SearchInput = styled("input")(() => ({
  width: "100%",
  height: "100%",
  border: "none",
  outline: "none",
  padding: "1rem",
  color: colors.mid_gray,
  textAlign: "center",
  fontSize: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// 3- search button

export const SearchButton = styled(Box)(() => ({
  width: 57,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.green,
}));
