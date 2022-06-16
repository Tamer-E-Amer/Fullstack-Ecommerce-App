/**
 * @description Login Form Container
 */

import React from "react";
// mui components
import { Box, Container, Stack } from "@mui/material";
import { colors } from "../../../themes/theme";
// images
import loginIllustration from "../../../assets/imgs/loginIllustration.png";
import LoginForm from "./LoginForm";
const LoginFormContainer = () => {
  return (
    <Container>
      <Box
        sx={{
          width: "80%",
          height: "auto",
          borderRadius: "40px",
          margin: "50px auto",
          padding: "110px 1rem 1rem 1rem",
          border: `0.5px solid ${colors.light_gray} `,
          position: "relative",
          display: "flex",
        }}
        alignItems="center"
        justifyContent="center"
      >
        {/* header green box */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: 70,
            borderRadius: "40px 40px 0 0 ",
            top: 0,
            left: 0,
            backgroundColor: colors.green,
            display: "flex",
            color: "#fff",
            fontSize: 25,
            fontWeight: 500,
          }}
          alignItems="center"
          justifyContent="center"
        >
          Egymarket Login
        </Box>
        {/* image and login form container */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, md: 8 }}
          sx={{ width: "90%" }}
          p={2}
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <img
              src={loginIllustration}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
          <LoginForm />
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginFormContainer;
