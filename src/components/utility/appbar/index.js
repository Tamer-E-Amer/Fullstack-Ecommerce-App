/**
 * @description this js file will test the media screen and then indicate which navbar will be rendered
 */

import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
// navbarComponents
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = () => {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isExrasmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      {isMobileScreen ? (
        <NavbarMobile isExrasmallScreen={isExrasmallScreen} />
      ) : (
        <NavbarDesktop />
      )}
    </>
  );
};

export default Navbar;
