/**
 * @description best seller component
 */

import { Container, Grid, Button, Stack } from "@mui/material";
import React from "react";
import SectionTitle from "../../utility/sectionTitle/SectionTitle";

// get data of best seller products
import { bestSeller } from "../../../data/bestSeller";
import ProductCard from "../../utility/products/ProductCard";
// icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// router-dom
import { Link } from "react-router-dom";
const BestSeller = () => {
  // map throught best seller
  const bestSellerData = bestSeller.map((bs) => {
    return (
      <Grid item key={bs.id}>
        <Link to="/productdetails/11111" style={{ textDecoration: "none" }}>
          <ProductCard productData={bs} />
        </Link>
      </Grid>
    );
  });
  return (
    <>
      <Container>
        <SectionTitle title={"Best Seller"} bg="#fff" />
        <Grid container gap={3} justifyContent={"center"} alignItems={"center"}>
          {bestSellerData}
        </Grid>
        <Stack justifyContent="center" alignItems="center" m={3}>
          <Link to="/allproducts" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="secondary"
              sx={{ width: 240, height: 50, textDecoration: "none" }}
              startIcon={<ShoppingCartIcon />}
            >
              More...
            </Button>
          </Link>
        </Stack>
      </Container>
    </>
  );
};

export default BestSeller;
