/**
 * @Description actions buttons in navbar: shopping car, login and sign up
 */

import React from "react";
// mui components
import { Stack, IconButton, Badge } from "@mui/material";
// mui icons
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
// colors
import { colors } from "../../../themes/theme";
// icon
import MenuIcon from "@mui/icons-material/Menu";
const NavbarActions = () => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent="space-between"
      direction="row"
      spacing={1}
    >
      {/* shopping car */}
      <Badge badgeContent={2} color="error">
        <ShoppingCartCheckoutIcon
          fontSize="large"
          sx={{ color: `${colors.mid_gray}` }}
        />
      </Badge>
      {/* menu icon */}
      <IconButton>
        <MenuIcon fontSize="large" sx={{ color: "#fff" }} />
      </IconButton>
    </Stack>
  );
};

export default NavbarActions;
