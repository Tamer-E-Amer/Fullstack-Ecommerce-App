/**
 * @description theme of the site
 */

import { createTheme } from "@mui/material";

// color palette
export const colors = {
  green: "#6CA12B",
  dark_grey: "#262626",
  mid_gray: "#8F8E8E",
  light_gray: "#C5C5C5",
};
export const theme = createTheme({
  palette: {
    primary: {
      main: colors.dark_grey,
    },
    secondary: {
      main: colors.green,
    },
  },
});
