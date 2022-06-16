/**
 * @description login form
 */

import React from "react";
// mui components
import { Stack, Typography, Box, Button } from "@mui/material";
// icons
import LoginIcon from "@mui/icons-material/Login";
import PasswordIcon from "@mui/icons-material/Password";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import GroupIcon from "@mui/icons-material/Group";
// colors
import { colors } from "../../themes/theme";
const RegisterForm = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={1}>
      <Typography
        variant="h6"
        sx={{ fontSize: 18, fontWeight: 400, color: colors.dark_grey }}
      >
        make your account easy
      </Typography>
      {/*  first and last name */}
      <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, md: 3 }}>
        <Box
          display="flex"
          alignItems="center"
          sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
          px={2}
        >
          <PersonIcon sx={{ color: `${colors.mid_gray}` }} />
          <input
            type="text"
            placeholder="First name"
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

        <Box
          display="flex"
          alignItems="center"
          sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
          px={2}
        >
          {/*  first and last name */}

          <PersonIcon sx={{ color: `${colors.mid_gray}` }} />
          <input
            type="text"
            placeholder="Last name"
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
      </Stack>

      {/* Email */}
      <Box
        display="flex"
        alignItems="center"
        sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
        px={2}
      >
        <EmailIcon sx={{ color: `${colors.mid_gray}` }} />
        <input
          type="email"
          placeholder="Enter your email"
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
      {/* password */}
      <Box
        display="flex"
        alignItems="center"
        sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
        px={2}
      >
        <PasswordIcon sx={{ color: `${colors.mid_gray}` }} />
        <input
          type="password"
          placeholder="Enter password"
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
      {/* confirm password */}
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
      {/*  register button */}
      <Button
        variant="contained"
        color="secondary"
        sx={{ width: "50%", height: { xs: 40, md: 40 }, borderRadius: 0 }}
        startIcon={<GroupIcon />}
        mb={7}
      >
        Register
      </Button>
    </Stack>
  );
};

export default RegisterForm;
