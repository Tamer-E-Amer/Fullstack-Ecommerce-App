/**
 * welcome banner styling
 */

import { styled, Typography, Button, Stack } from "@mui/material";
// colors
import { colors } from "../../../themes/theme";

// banner container
export const WelcomeBannerWrapper = styled(Stack)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    justifyContent: "center",
  },
}));

// welcometext wrapper

export const WelcomeBannerTextWrapper = styled(Stack)(({ theme }) => ({
  alignItems: "left",
  justifyContent: "space-between",
  padding: "1rem 0",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    justifyContent: "center",
  },
}));

// banner welcome message title
export const WelcomeBannerTitle = styled(Typography)(() => ({
  color: colors.dark_grey,
  fontSize: 40,
  fontWeight: 700,
}));

// Egymark span

export const WelcomeBannerMessageMarktSpan = styled("span")(() => ({
  color: colors.green,
  fontSize: 40,
  fontWeight: 700,
  margin: "0 1rem",
}));

// welcome text
export const WelcomeBannerText = styled(Typography)(({ theme }) => ({
  color: colors.dark_grey,
  fontSize: 20,
  fontWeight: 350,
  margin: "1rem 0",
  width: 400,
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

// shop button

export const ShopButton = styled(Button)(() => ({
  color: "#fff",
  fontSize: 20,
  fontWeight: 350,
  margin: "1rem 0",
  borderRadius: 0,
  textTransform: "none",
  width: 160,
}));

// banner image

export const WelcomeBannerImg = styled("img")(({ theme }) => ({
  width: 599,
  height: 363,
  [theme.breakpoints.down("lg")]: {
    width: 456,
    height: 229,
  },
  [theme.breakpoints.down("sm")]: {
    width: 345,
    height: 173,
  },
}));
