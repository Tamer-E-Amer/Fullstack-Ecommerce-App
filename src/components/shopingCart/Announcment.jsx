/**
 * @description announce ment component in the cart page
 */
import React from "react";
// app components
import GreenActionButton from "../utility/greenActionButton/GreenActionButton";
//mui components
import { Box, Typography } from "@mui/material";
// icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// colors and theme
import { colors } from "../../themes/theme";
// react-router-dom
import { Link } from "react-router-dom";
const Announcment = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ border: `1px solid ${colors.light_gray}` }}
        width="100%"
        height="285px"
        bgcolor={colors.light_gray_bg}
        color={colors.dark_grey}
        flexDirection="column"
        p={2}
      >
        <Typography variant="h5" sx={{ fontSize: 18 }}>
          Your first order will be delivered for free
        </Typography>

        <Typography variant="h6" sx={{ marginTop: "1rem" }}>
          For more Information click{" "}
          <Link
            to=""
            style={{ textDecoration: "none", color: `${colors.green}` }}
          >
            here
          </Link>
        </Typography>
        <Link to="/allproducts" style={{textDecoration:"none"}}>
          <GreenActionButton
            label="Continue shopping"
            width="250px"
            height="50px"
            icon={<ShoppingCartIcon />}
          />
        </Link>
      </Box>
    </>
  );
};

export default Announcment;
