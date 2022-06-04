/**
 * @Description actions buttons in navbar: shopping car, login and sign up
 */

import React from "react";
// mui components
import { Stack, Button, Typography } from "@mui/material";
// mui icons
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
// colors
import { colors } from "../../../themes/theme";
const NavbarActions = () => {
  return (
    <Stack
      alignItems={"center"}
      justifyContent="space-between"
      direction="row"
      spacing={2}
    >
      {/* shopping car */}
      <ShoppingCartCheckoutIcon
        fontSize="large"
        sx={{ color: `${colors.mid_gray}` }}
      />
      {/* login */}
      <Typography color={colors.mid_gray} sx={{ cursor: "pointer" }}>
        login
      </Typography>
      {/* sign up */}
      <Button
        variant="contained"
        size="large"
        color="secondary"
        sx={{ textTransform: "none", borderRadius: 0 }}
      >
        {" "}
        Sign up
      </Button>
    </Stack>
  );
};

export default NavbarActions;
