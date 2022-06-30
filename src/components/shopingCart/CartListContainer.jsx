/**
 * @descrption cart list container that contains the cartListItems
 */

import React from "react";
// mui components
import {
  Box,
  Stack,
  Typography,
} from "@mui/material";
// app components
import CartLListCard from "./CartLListCard";


// colors and themes
import { colors } from "../../themes/theme";



const CartListContainer = () => {
 
  const cartCards = [1, 2, 3].map((card, index) => (
    <CartLListCard key={index} />
  ));
  return (
    <>
      {/*  list header */}
      <Box
        height={65}
        bgcolor={colors.light_gray}
        p={1}
        display="flex"
        alignItems="center"
        // width="60%"
      >
        <Typography variant="h5" color={colors.dark_grey}>
          You have 3 items in your cart
        </Typography>
      </Box>
      {/* list cards */}
      <Stack width="100%" spacing={1} pt={1} pb={1}>
        {cartCards}
      </Stack>
      {/*  list total */}
      <Box
        height={65}
        bgcolor={colors.mid_gray}
        pl={1}
        pr={10}
        display="flex"
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Typography variant="h5" color="#fff">
          Total
        </Typography>
        <Typography variant="h5" color="#fff" sx={{ fontSize: 40 }}>
          10$
        </Typography>
      </Box>

      

    
    </>
  );
};

export default CartListContainer;
