import React from "react";
// mui components
import {
  ListItemIcon,
  ListItemText,
  Stack,
  Box,
  Typography,TextField
} from "@mui/material";
// imgs
import mango from "../../assets/imgs/mango.png";
// colors and theme
import { colors } from "../../themes/theme";
const CartItemRow = () => {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent={"space-between"}
        sx={{
          color: colors.dark_grey,
          width: "100%",
          padding: "0 2rem",
        //   height: 40,
        }}
      >
        {/* product title and image */}
        <Stack direction="row" alignItems="center" spacing={1}>
          <ListItemIcon>
            <img src={mango} alt="" style={{ height: 64, width: 64 }} />
          </ListItemIcon>

          <ListItemText primary="Mango alphonsos" />
        </Stack>
        {/* unit prics */}
        <Typography variant="h6" >
          1.5$/kg
        </Typography>

        {/*  quantity*/}
        <TextField type="number" variant="outlined"/>
      </Stack>
    </>
  );
};

export default CartItemRow;
