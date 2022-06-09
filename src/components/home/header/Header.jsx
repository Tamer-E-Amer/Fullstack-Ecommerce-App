/**
 * @description header component which is under navbar and contain image and welcome text
 */

 import React from 'react'
 // mui components
 import {Container, Typography} from '@mui/material'
 // styled components
 import {HeaderWrapper,WlcomeMsgTitle,EgyMarketSpan,WelcomeMEssageText} from '../../../styles/home/header'
 const Header = () => {
     return (
         <>
             {/* 
             header wrapper
             welcome text
             
             */}
             <HeaderWrapper>
                 <Container>
                     <WlcomeMsgTitle variant="h2">Welcome to 
                     <EgyMarketSpan>EgyMarket</EgyMarketSpan>
                     </WlcomeMsgTitle>
                     <WelcomeMEssageText>
                         kkjkggkjgjkgjkg
                     </WelcomeMEssageText>
                 </Container>
             </HeaderWrapper>
         </>
     )
 }
 
 export default Header
