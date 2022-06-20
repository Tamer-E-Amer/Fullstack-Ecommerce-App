/**
 * @description product description component that appears in product details page
 */
import React from "react";
// mui components
import { Box, Stack, Typography } from "@mui/material";
// imgs
import mango from "../../assets/imgs/mango.png";
import { colors } from "../../themes/theme";
const ProductDescription = () => {
  return (
    <>
      <Stack mt={5} direction ={"row"} spacing={5}> 
        {/* product imag */}
        <Box spacing={1} >
          <img
            src={mango}
            alt="product image"
            style={{ height: 328, width: 247 }}
          />
        </Box>
        {/* product details data */}
        <Box width="350px">
            <Typography variant="h4" sx={{color:colors.dark_grey}}> Fruit</Typography>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography varinat="subtitle" sx={{color:colors.mid_gray}}>Mango Alphonsos</Typography>
                {/* price box */}
                <Box sx={{borderRadius:40,width:130, height:30, bgcolor:colors.dark_grey}} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h6" sx={{color:"#fff"}}>1.3$</Typography>
                </Box>
            </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default ProductDescription;
