/**
 * @Description actions buttons in navbar: shopping car, login and sign up
 */

import React from "react";
// mui components
import { Stack, Button, Typography, Badge } from "@mui/material";
// mui icons
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
// colors
import { colors } from "../../../themes/theme";
import { Link } from "react-router-dom";
const NavbarActions = () => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent="space-between"
      direction="row"
      spacing={2}
    >
      {/* shopping car */}
      <Badge badgeContent={2} color="error">
        <ShoppingCartCheckoutIcon
          fontSize="large"
          sx={{ color: `${colors.mid_gray}` }}
        />
      </Badge>
      {/* login */}
      <Link to="/login" style={{ textDecoration: "none" }}>
        <Typography color={colors.mid_gray} sx={{ cursor: "pointer" }}>
          login
        </Typography>
      </Link>
      {/* sign up */}
      <Link to="/register" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          sx={{ textTransform: "none", borderRadius: 0 }}
        >
          {" "}
          Sign up
        </Button>
      </Link>
    </Stack>
  );
};

export default NavbarActions;
