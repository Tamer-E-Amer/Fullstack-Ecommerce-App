/**
 * @description theme of the site
 */

import { createTheme } from "@mui/material";

// color palette
export const colors = {
  dark_grey: "#272525",
  mid_gray: "#26282F",
  light_gray: "#7B7C80",
};
export const theme = createTheme({
  palette: {
    primary: {
      main: colors.dark_grey,
    },
  },
});
