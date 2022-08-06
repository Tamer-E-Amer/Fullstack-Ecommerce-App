/**
 * @descriptopn change password form in admin system
 */

import React from "react";
// mui components
import { Stack, Typography, Box, Button } from "@mui/material";
// icons
import SaveIcon from "@mui/icons-material/Save";
import PasswordIcon from "@mui/icons-material/Password";
// colors
import { colors } from "../../../../themes/theme";
const ChangePasswordForm = () => {
  return (
    <>
      <Stack sx={{ width: "100%" }} spacing={1}>
        <Typography
          variant="h6"
          sx={{ fontSize: 18, fontWeight: 400, color: colors.dark_grey }}
        >
          Change your password
        </Typography>
        {/* Current password */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
          px={2}
        >
          <PasswordIcon sx={{ color: `${colors.mid_gray}` }} />
          <input
            type="password"
            placeholder="Current password"
            style={{
              outline: "none",
              border: "none",
              width: "100%",
              height: 30,
              fontSize: 16,
              color: `${colors.mid_gray}`,
              textAlign: "center",
            }}
          />
        </Box>
        {/* New password */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
          px={2}
        >
          <PasswordIcon sx={{ color: `${colors.mid_gray}` }} />
          <input
            type="password"
            placeholder="New password"
            style={{
              outline: "none",
              border: "none",
              width: "100%",
              height: 30,
              fontSize: 16,
              color: `${colors.mid_gray}`,
              textAlign: "center",
            }}
          />
        </Box>
        {/* Confirm password */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
          px={2}
        >
          <PasswordIcon sx={{ color: `${colors.mid_gray}` }} />
          <input
            type="password"
            placeholder="Confirm password"
            style={{
              outline: "none",
              border: "none",
              width: "100%",
              height: 30,
              fontSize: 16,
              color: `${colors.mid_gray}`,
              textAlign: "center",
            }}
          />
        </Box>

        {/*  save changes button */}
        <Button
          variant="contained"
          color="secondary"
          sx={{
            width: "100%",
            height: { xs: 40, md: 40 },
            borderRadius: 0,
            textTransform: "none",
          }}
          startIcon={<SaveIcon />}
          mb={7}
        >
          Save changes
        </Button>
      </Stack>
    </>
  );
};

export default ChangePasswordForm;
