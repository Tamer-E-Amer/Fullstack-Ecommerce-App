/**
 * @description Home page
 */
import React from "react";
// application components
import Navbar from "../../components/utility/appbar";
import WelcomeBanner from "../../components/home/welcomeBanner/WelcomeBanner";
import AdvantagesContainer from "../../components/home/advantages/advantageCard/AdvantagesContainer";
import HotDeals from "../../components/home/hotDeals/HotDeals";
import Brands from "../../components/home/brands/Brands";
import RecentlyAdded from "../../components/home/recentlyAdded/RecentlyAdded";
// mui comoponents
import { Container, Stack, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import CategoryContainer from "../../components/home/categoryContainer/CategoryContainer";
import { useTheme } from "@mui/material/styles";
import BestSeller from "../../components/home/bestSeller/BestSeller";
// themes colors
import { colors } from "../../themes/theme";
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
      {/* best seller and brands section */}
      <Box>
        <BestSeller />
        <Brands />
      </Box>
      {/* recently added section */}
      <Box p={2} sx={{ backgroundColor: colors.light_gray, height: 400 }}>
        <Container>
          <RecentlyAdded />
        </Container>
      </Box>
    </>
  );
};

export default Home;
