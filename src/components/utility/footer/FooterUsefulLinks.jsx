/**
 * @description footer usefull links
 */

import React from "react";
import FooterSectionTitle from "../footerSectionTitle/FooterSectionTitle";
// mui cpmponents
import {
  Stack,
  List,
  ListItem,
  Typography,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// colors
import { colors } from "../../../themes/theme";
// useful link data
import { footerUsefulLinks } from "../../../data/footerLinks";
const FooterUsefulLinks = () => {
  // map throu link array
  const links = footerUsefulLinks.map((link) => {
    return (
      <Stack
        direction="row"
        aligntems="center"
        spacing={1}
        sx={{
          "&:hover": {
            cursor: "pointer",
            textDecoration: "underline",
            color: colors.green,
          },
        }}
        key={link.id}
      >
        <ArrowForwardIosIcon />
        <Typography variant="body2">{link.linkTitle}</Typography>
      </Stack>
    );
  });
  return (
    <Stack mb={3}>
      <FooterSectionTitle title="Useful links" />

      <Stack sx={{ color: colors.light_gray }} mt={2} spacing={1}>
        {links}
      </Stack>
    </Stack>
  );
};

export default FooterUsefulLinks;
