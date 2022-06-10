/**
 * @description Home page
 */
import React from "react";
// application components
import Navbar from "../../components/utility/appbar";
import WelcomeBanner from "../../components/home/welcomeBanner/WelcomeBanner";
import AdvantagesContainer from "../../components/home/advantages/advantageCard/AdvantagesContainer";
import HotDeals from "../../components/home/hotDeals/HotDeals";
import { Container, Stack, useMediaQuery } from "@mui/material";
import { colors } from "../../themes/theme";
import { Box } from "@mui/system";
import CategoryContainer from "../../components/home/categoryContainer/CategoryContainer";
import { useTheme } from "@mui/material/styles";
const Home = () => {
  return (
    <>
      <Navbar />
      <WelcomeBanner />
      {/* section that contains advantage, hotdeals and category container */}
      <Box sx={{ backgroundColor: colors.light_gray, height: "auto" }}>
        <Container>
          <Stack>
            <AdvantagesContainer />
            <HotDeals />
            <CategoryContainer />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
