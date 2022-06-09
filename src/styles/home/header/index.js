/**
 * @description header styling
 */

import { Box, styled, Typography } from "@mui/material";
import { colors } from "../../../themes/theme";
// imgs
import headerBg from '../../../assets/imgs/bannar1.png'
 export const HeaderWrapper = styled(Box)(()=>({
     height:403,
     width:"100%",
     backgroundImage:`url(${headerBg})`,
     backgroundRepeat:"no-repeat",
     backgroundPosition:"right",
     display:"flex",
     alignItems:"center",
     justifyContent:"flex-start"
 }))

 // welcome message

 export const WlcomeMsgTitle = styled(Typography)(()=>({
  color:colors.dark_grey,
  fontSize:40,
  fontWeight:500
}))

// Egymarket span
export const EgyMarketSpan = styled('span')(()=>({
    color:colors.green,
    fontSize:40,
    fontWeight:500,
    margin:"0 1rem"
  })) 

  // welcome message text
export const WelcomeMEssageText = styled(Typography)(()=>({
    color:colors.dark_grey,
    fontSize:20,
    lineHeight:1.5,
    // fontWeight:500,
    // margin:"0 1rem"
  })) 