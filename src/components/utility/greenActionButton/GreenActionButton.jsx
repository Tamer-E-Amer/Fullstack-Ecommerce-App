/**
 * @description green action button with icon
 * @param {string} label     // action label
 * @param {number} width    // button width
 * @param {number} height  // button height
 * @param {Object} icon   // button icon
 */

import React from "react";
// mui components
import { Button } from "@mui/material";
const GreenActionButton = ({ label, width, height, icon }) => {
  return (
    <>
    
      <Button
        variant="contained"
        color="secondary"
        sx={{
          width: width,
          height: height,
          borderRadius: 0,
          textTransform: "none",
          margin: "1rem 0",
        }}
        startIcon={icon}
      >
        {label}
      </Button>
    </>
  );
};

export default GreenActionButton;
