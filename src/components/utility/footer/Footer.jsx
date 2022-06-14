/**
 * @description footer components
 */
import React from "react";
// app components
import SectionTitle from "../../utility/sectionTitle/SectionTitle";
import FooterContactSection from "./FooterContactSection";
import FooterUsefulLinks from "./FooterUsefulLinks";
import FooterSubscribeSection from "./FooterSubscribeSection";
// mui components
import { Box, Container, Typography } from "@mui/material";
// colors theme
import { colors } from "../../../themes/theme";

const Footer = () => {
  return (
    <>
      <Box
        pt={5}
        pb={1}
        sx={{ backgroundColor: colors.dark_grey, height: "auto" }}
      >
        <Container>
          {/*useful Link  */}
          {/*subscribe  */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "space-between" },
              alignItems: "flex-start",
              flexWrap: { xs: "wrap" },
            }}
          >
            {/*contact  */}
            <FooterContactSection />
            <FooterUsefulLinks />
            <FooterSubscribeSection />
          </Box>
          {/* separator */}
          <SectionTitle title="" display="none" />
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            sx={{ color: colors.light_gray }}
          >
            <Typography variant="subtitle">
              Egymarket. All rights reserved 2022
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
