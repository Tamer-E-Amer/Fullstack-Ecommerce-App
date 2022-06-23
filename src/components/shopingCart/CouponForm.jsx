/**
 * @description coupon form to enter a coupon to make a discount for the total price
 */
import React from "react";
// mui components
import { Stack, Box, Typography, Button } from "@mui/material";
// icons
import QrCode2Icon from '@mui/icons-material/QrCode2';
// colors and themes
import { colors } from "../../themes/theme";
const CouponForm = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ border: `1px solid ${colors.light_gray}` }}
        p={3}
      >
        <Stack alignItems="flex-start" justifyContent="center" spacing={1}>
          <Typography variant="subtitle1" color={colors.mid_gray}>
            Do you have a coupon?
          </Typography>
          {/* coupon input field */}
          
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{ border: `0.5px solid ${colors.light_gray}`, height: 40 }}
              pl={2}
            >
              <QrCode2Icon sx={{ color: `${colors.mid_gray}` }} />
              <input
                type="text"
                placeholder="Enter your Coupon "
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
              <Button variant="contained" color="secondary" sx={{borderRadius:0, height:40}}>Apply</Button>
            </Box>
          
        </Stack>
      </Box>
    </>
  );
};

export default CouponForm;
