/**
 * @description Brand logo component
 * @param {string} :logo // brand logo
 */

import React from "react";
// mui components
import { Box } from "@mui/material";
const BrandLogo = ({ logo }) => {
  return (
    <>
      <Box
        sx={{
          width: 245,
          height: 173,
          display: "flex",
          alignItems: "center",
          justifyContent: "Center",
          "&:hover": {
            cursor: "pointer",
            "& .brandLogo": {
              transform: "scale(1.1)",
              transition: "all 0.5s ease-in-out",
            },
          },
        }}
      >
        <img src={logo} className="brandLogo" />
      </Box>
    </>
  );
};

export default BrandLogo;
