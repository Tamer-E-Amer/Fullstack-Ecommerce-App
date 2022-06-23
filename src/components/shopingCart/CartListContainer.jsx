/**
 * @descrption cart list container that contains the cartListItems
 */

import React from "react";
// mui components
import {
  Box,
  Stack,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
// app components
import CartLListCard from "./CartLListCard";
import CouponForm from "./CouponForm";
import ContinueOrCheckOut from "./ContinueOrCheckOut";
// colors and themes
import { colors } from "../../themes/theme";

// react reveal
import { Slide } from "react-awesome-reveal";
import Announcment from "./Announcment";
const CartListContainer = () => {
  // show coupon state
  const [showCoupon, setShowCoupon] = React.useState(false);
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

      {/* Coupon section */}
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              onClick={() => {
                setShowCoupon(!showCoupon);
              }}
            />
          }
          label="I have a coupon"
        />
      </FormGroup>
      {showCoupon && (
        <Slide direction="left">
          <CouponForm />
        </Slide>
      )}

      {/* Action buttons */}

      <ContinueOrCheckOut />
      {/* announcement component */}
      <Announcment />
    </>
  );
};

export default CartListContainer;
