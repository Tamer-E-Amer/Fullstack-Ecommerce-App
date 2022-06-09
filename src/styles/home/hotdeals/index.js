/**
 * hotdeals section style
 */

import { Box, Stack, styled } from "@mui/material";
import { colors } from "../../../themes/theme";

 export const HotDealsWrapper = styled(Stack)(()=>({
padding:"1rem",
height:"auto",
backgroundColor:colors.mid_gray,
alignItems:"center",
justifyContent:"space-between"

 }))

 export const HotDealsItems = styled(Box)(()=>({
     display:"flex",
     alignItems:"center",
     justifyContent:"center",
    padding:"1rem",
    height:"auto",
    backgroundColor:colors.mid_gray,
    flexWrap:'wrap'
    
     }))
    