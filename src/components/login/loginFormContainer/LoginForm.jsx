/**
 * @description login form
 */

import React from "react";
// mui components
import {
  Stack,
  Typography,
  Box,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
// icons
import LoginIcon from "@mui/icons-material/Login";
import PasswordIcon from "@mui/icons-material/Password";
import PersonIcon from "@mui/icons-material/Person";
// colors
import { colors } from "../../../themes/theme";
// react-router
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={1}>
      <Typography
        variant="h6"
        sx={{ fontSize: 18, fontWeight: 400, color: colors.dark_grey }}
      >
        Sign in Egymarket
      </Typography>
      {/* user name */}
      <Box
        display="flex"
        alignItems="center"
        sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
        px={2}
      >
        <PersonIcon sx={{ color: `${colors.mid_gray}` }} />
        <input
          type="text"
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
      {/* remember me checkbox */}
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember me"
        />
      </FormGroup>
      {/*  login button */}
      <Button
        variant="contained"
        color="secondary"
        sx={{ width: "50%", height: { xs: 40, md: 40 }, borderRadius: 0 }}
        startIcon={<LoginIcon />}
        mb={7}
      >
        Login
      </Button>
      <Typography variant="body2" color="prima ry" sx={{ margin: "1rem" }}>
        Dont have account?{" "}
        <Link to={"/register"} style={{ color: colors.dark_grey }}>
          Click here
        </Link>
      </Typography>
    </Stack>
  );
};

export default LoginForm;
