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
const BestSeller = () => {
  // map throught best seller
  const bestSellerData = bestSeller.map((bs) => {
    return (
      <Grid item key={bs.id}>
        <ProductCard productData={bs} />
      </Grid>
    );
  });
  return (
    <>
      <Container>
        <SectionTitle title={"Best Seller"} bgColor="#fff" />
        <Grid container gap={3} justifyContent={"center"} alignItems={"center"}>
          {bestSellerData}
        </Grid>
        <Stack justifyContent="center" alignItems="center" m={3}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: 240, height: 50, textDecoration: "none" }}
            startIcon={<ShoppingCartIcon />}
          >
            More...
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default BestSeller;
