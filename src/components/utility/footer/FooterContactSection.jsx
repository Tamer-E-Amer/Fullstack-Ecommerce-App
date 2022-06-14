/**
 * @description footer contact section
 */

import React from "react";
import FooterSectionTitle from "../footerSectionTitle/FooterSectionTitle";
// mui components
import { Stack, Typography, Box } from "@mui/material";
// colors
import { colors } from "../../../themes/theme";
// icons
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// contact data
import { footerContactData } from "../../../data/footerContactData";
import { hover } from "@testing-library/user-event/dist/hover";
const FooterContactSection = () => {
  const socialLogos = footerContactData.socialLogos.map((logo, index) => {
    return (
      <Box
        key={index}
        sx={{
          "&:hover": {
            cursor: "pointer",
            color: colors.green,
            transform: "scale(1.1)",
            transition: "all 0.5s eas-in-out",
          },
        }}
      >
        {logo}
      </Box>
    );
  });
  return (
    <Stack mb={3}>
      <FooterSectionTitle title="Contact us" />
      <Stack sx={{ color: colors.light_gray }} mt={2} spacing={3}>
        {/*  address */}
        <Stack spacing={1}>
          <Typography variant="body2">{footerContactData.street}</Typography>
          <Typography variant="body2">{footerContactData.city}</Typography>
          <Typography variant="body2">{footerContactData.country}</Typography>
        </Stack>
        {/* contact */}
        <Stack spacing={1}>
          <Stack direction="row" spacing={1}>
            <LocalPhoneIcon />
            <Typography variant="body2">0111111111111</Typography>
          </Stack>
          <Stack direction="row" spacing={1}>
            <MailIcon />
            <Typography variant="body2">info@egymarket.com.eg</Typography>
          </Stack>
        </Stack>
        {/* social icns */}
        <Stack direction="row" spacing={1}>
          {socialLogos}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FooterContactSection;
