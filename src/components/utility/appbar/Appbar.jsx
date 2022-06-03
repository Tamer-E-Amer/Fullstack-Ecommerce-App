/**
 * @description this is the Appbar components
 */
import React from "react";
// styled Components
import { AppbarWrapper } from "../../../styles/utility/appbar";
// mui components
import { Container } from "@mui/material";
const Appbar = () => {
  return (
    <>
      <AppbarWrapper>
        <Container>
          logo
          {/* <Logo />
        <Search />
        <ActionButtonsWrapper>
          <LoginButton />
          <CartButton />
        </ActionButtonsWrapper> */}
        </Container>
      </AppbarWrapper>
    </>
  );
};

export default Appbar;
