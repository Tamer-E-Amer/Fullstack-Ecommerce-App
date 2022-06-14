/**
 * @footer subscribe
 */
import React from "react";
import FooterSectionTitle from "../footerSectionTitle/FooterSectionTitle";
// mui components
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
// icons
import EmailIcon from "@mui/icons-material/Email";
const FooterSubscribeSection = () => {
  return (
    <Stack sx={{ width: 287 }}>
      <FooterSectionTitle title="Subscribe" />
      {/* <Box component="form" noValidate autoComplete="off">
        <TextField variant="outline" />
      </Box> */}
      <Stack>
        <input
          type="text"
          style={{
            // width: "100%",
            border: "1px solid #707070",
            height: 40,
            margin: "1rem 0",
            textAlign: "center",
            fontSize: 16,
            outline: "none",
            color: "#707070",
          }}
          placeholder="Enter your e-mail"
        />

        <Button
          variant="contained"
          color="secondary"
          startIcon={<EmailIcon fontSize="large" />}
          sx={{
            // width: "100%",
            height: 40,
            borderRadius: 0,
            textTransform: "none",
            fontSize: 16,
          }}
        >
          Subscribe
        </Button>
        <Typography
          varinat="body2"
          style={{ color: "#C5C5C5", margin: "1rem 0" }}
        >
          Subscribe to our Newsletter to receive early discount offers, latest
          news, sales and promo information.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default FooterSubscribeSection;
