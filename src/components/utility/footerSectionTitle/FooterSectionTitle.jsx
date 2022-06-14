/**
 * @descriptio title of each section in Footer
 */

import React from "react";
import { Typography, Stack } from "@mui/material";
// colors
import { colors } from "../../../themes/theme";
const FooterSectionTitle = ({ title }) => {
  return (
    <>
      <Stack>
        <Typography variant="h5" m={"0.5rem 0"} sx={{ color: "#fff" }}>
          {title}
        </Typography>
        {/* underline green and white */}
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <div
            style={{ backgroundColor: colors.green, width: 207, height: 1 }}
          ></div>
          <div style={{ backgroundColor: "#fff", width: 80, height: 1 }}></div>
        </Stack>
      </Stack>
    </>
  );
};

export default FooterSectionTitle;
