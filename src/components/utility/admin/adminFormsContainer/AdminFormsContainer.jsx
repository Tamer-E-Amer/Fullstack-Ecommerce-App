/**
 * @description form container for each admin function such as change password, update profile , add category and so on
 * @param {string}  : title
 * @param {string}  : image
 */

import React from "react";
// mui components
import { Box, Stack } from "@mui/material";
// color theme
import { colors } from "../../../../themes/theme";

const AdminFormsContainer = ({ title, img, form }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "40px",
          margin: "0 auto",
          padding: "110px 1rem 1rem 1rem",
          border: `0.5px solid ${colors.light_gray} `,
          position: "relative",
          display: "flex",
        }}
        alignItems="left"
        justifyContent="center"
      >
        {/* Box title*/}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: 48,
            borderRadius: "40px 40px 0 0 ",
            top: 0,
            left: 0,
            backgroundColor: colors.mid_gray,
            display: "flex",
            color: "#fff",
            fontSize: 20,
            fontWeight: 500,
          }}
          alignItems="center"
          justifyContent="center"
        >
          {title}
        </Box>
        {/* image and form container */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, md: 8 }}
          sx={{ width: "90%" }}
          p={2}
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <img src={img} style={{ width: "100%", height: "auto" }} />
          </Box>
          {form}
        </Stack>
      </Box>
    </>
  );
};

export default AdminFormsContainer;
