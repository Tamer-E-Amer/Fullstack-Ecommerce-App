/**
 * @description welcome banner: under the navbar
 */

import React from "react";
// mui components
import { Button, Container } from "@mui/material";
// styled components
import {
  WelcomeBannerWrapper,
  WelcomeBannerTextWrapper,
  WelcomeBannerTitle,
  WelcomeBannerMessageMarktSpan,
  WelcomeBannerText,
  ShopButton,
  WelcomeBannerImg,
} from "../../../styles/home/welcomeBanner";
// icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// images
import bannerImg from "../../../assets/imgs/banner-fruits.png";
// react router dom
import { Link } from "react-router-dom";
const WelcomeBanner = () => {
  return (
    <Container>
      <WelcomeBannerWrapper direction="row" spacing={2}>
        {/* welcome banner text wrapper */}
        <WelcomeBannerTextWrapper>
          <WelcomeBannerTitle>
            Welcome to
            <WelcomeBannerMessageMarktSpan>
              Egymarket
            </WelcomeBannerMessageMarktSpan>
          </WelcomeBannerTitle>

          <WelcomeBannerText>
            You can choose from very large collections of different fresh
            categoriesYou can choose from very large collections of different
            fresh categoriesYou can choose from very large collections of
            different fresh categoriesYou can choose from very
          </WelcomeBannerText>
          {/* ShopButton */}
          <Link to="/allproducts" style={{textDecoration:"none"}}>
            <ShopButton
              variant="contained"
              color="secondary"
              startIcon={<ShoppingCartIcon />}
            >
              Shop now
            </ShopButton>
          </Link>
        </WelcomeBannerTextWrapper>
        {/* welcome immage image */}
        <WelcomeBannerImg src={bannerImg} />
      </WelcomeBannerWrapper>
    </Container>
  );
};

export default WelcomeBanner;
