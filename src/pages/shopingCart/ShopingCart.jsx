/**
 * @description shoping cart page
 */
import React from "react";
// mui components
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  Stack, Container
} from "@mui/material";
// application components
import Navbar from "../../components/utility/appbar";
import Footer from "../../components/utility/footer/Footer";
import PageHeader from "../../components/utility/pageHeader/PageHeader";
import CartListContainer from "../../components/shopingCart/CartListContainer";
import CouponForm from "../../components/shopingCart/CouponForm";
import ContinueOrCheckOut from "../../components/shopingCart/ContinueOrCheckOut";
import Announcment from "../../components/shopingCart/Announcment";
import ProductSuggestion from "../../components/shopingCart/productSuggestion/ProductSuggestion";
// imgs
import headerImg2 from "../../assets/imgs/headerImg2.png";
// react reveal
import { Slide } from "react-awesome-reveal";
const ShopingCart = () => {
  // show coupon state
  const [showCoupon, setShowCoupon] = React.useState(false);

  return (
    <>
      <Navbar />
      <PageHeader title="Shoping cart" img={headerImg2} />
      {/* page structure */}
      <Container>
        <Grid container spacing={1} pt={2} pb={2}  justify="center">
          {/* lift column: list , coupon and action buttons */}
          <Grid item xs={12} md={8}>
            <Stack>
              <CartListContainer />
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
            </Stack>
          </Grid>
          {/* right column: announce and suggestions */}
          <Grid item xs={12} md={4}>
            <Stack>
              {/* announcement component */}
              <Announcment />
              {/* product suggestions */}
              <ProductSuggestion />
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default ShopingCart;
