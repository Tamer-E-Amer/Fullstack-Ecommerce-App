/**
 * @description Navbar in mobile screens
 */

import React from "react";
// mui components
import { Container, Stack, Typography } from "@mui/material";
// styled components
import {
  AppbarWrapper,
  // SearchInputWrapper,
  // SearchInput,
  // SearchButton,
} from "../../../styles/utility/appbar";
// app components
import MobileNavbarActions from "../appbar/MobileNavbarActions";
// imgs
import logo from "../../../assets/imgs/logo.png";
import logoMobile from "../../../assets/imgs/logo-Mobile.png";

const NavbarMobile = () => {
  return (
    <>
      <AppbarWrapper>
        <Container>
          <Stack
            alignItems={"center"}
            justifyContent="space-between"
            direction={"row"}
          >
            <img src={logo} />
            <MobileNavbarActions />
          </Stack>
        </Container>
      </AppbarWrapper>
    </>
  );
};

export default NavbarMobile;
