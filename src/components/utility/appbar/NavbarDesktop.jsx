/**
 * @description this is the Appbar components
 */
import React from "react";
// app components
import NavbarActions from "./NavbarActions";
// styled Components
import {
  AppbarWrapper,
  SearchInputWrapper,
  SearchInput,
  SearchButton,
} from "../../../styles/utility/appbar";
// mui components
import { Container, IconButton, Stack, Typography } from "@mui/material";
// mui icons
import SearchIcon from "@mui/icons-material/Search";

// imgs
import logo from "../../../assets/imgs/logo.png";
const NavbarDesktop = () => {
  return (
    <>
      <AppbarWrapper>
        <Container>
          <Stack
            alignItems={"center"}
            justifyContent="space-between"
            direction={"row"}
          >
            {/* logo */}
            <img src={logo} />
            {/*  search */}
            <SearchInputWrapper>
              <SearchInput type="search" />
              <SearchButton>
                <IconButton>
                  <SearchIcon fontSize="large" sx={{ color: "#fff" }} />
                </IconButton>
              </SearchButton>
            </SearchInputWrapper>
            {/* action buttons */}
            <NavbarActions />
          </Stack>
        </Container>
      </AppbarWrapper>
    </>
  );
};

export default NavbarDesktop;
