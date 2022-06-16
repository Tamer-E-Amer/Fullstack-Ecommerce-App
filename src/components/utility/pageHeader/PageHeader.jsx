/**
 * @description pahe header: the image and the title to describe what is page talking about
 * @param {string} :image
 * @param {string} :title
 */

import React from "react";
// mui components
import { Container, Box, Stack, Typography } from "@mui/material";

// colors theme
import { colors } from "../../../themes/theme";
const PageHeader = ({ title, img }) => {
  return (
    <Container>
      <Stack alignItems="center" justifyContent="center">
        {/* image */}
        <img
          src={img}
          style={{ width: "100%", height: "auto" }}
          alt="page header"
        />
        {/* title */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="secondary"
          sx={{
            backgroundColor: `${colors.green}`,
            borderRadius: "0 0 20px 20px",
            width: { xs: "80%", md: "40%" },
            height: { xs: 40, md: 60 },
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "#fff", fontSize: { xs: 16, md: 18 } }}
          >
            {title}
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default PageHeader;
