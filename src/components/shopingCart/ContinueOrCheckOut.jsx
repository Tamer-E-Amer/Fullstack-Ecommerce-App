/**
 * @description this section display action button for shopping cart continue shopping and check out
 */

import React from "react";
// mui component
import { Box, Button, Stack } from "@mui/material";
// icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
// colors and themes
import {colors} from '../../themes/theme'
// images
import visa from '../../assets/imgs/visa.png';
import paypal from '../../assets/imgs/paypal.png';
import mastercard from '../../assets/imgs/mastercard.png';
const ContinueOrCheckOut = () => {
   
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ border: `1px solid ${colors.light_gray}` }}
        bgcolor={colors.light_gray_bg}
        p={3}
        mt={2}
        mb={2}
      >
          <Stack alignItems="center" justifyContent="center" spacing={2} direction={{xs:"column", md:"row"}}>
              <Button variant="outlined" color="secondary" sx={{width:300, height:50, borderRadius:0, textTransform:"none"}} startIcon={<ShoppingCartIcon/>}>Continue Shopping</Button>
              <Button variant="contained" color="secondary" sx={{width:300, height:50, borderRadius:0, textTransform:"none"}} startIcon={<CreditCardIcon/>}>Scheck out</Button>
          
          </Stack>

         
      </Box>
      
          {/* payment images */}
          <Stack spacing={2} direction="row" mb={2}>
            <img src={visa} alt="visa card" />
            <img src={paypal} alt="pay pal card" />
            <img src={mastercard} alt="master card" />
          </Stack>
    </>
  );
};

export default ContinueOrCheckOut;
