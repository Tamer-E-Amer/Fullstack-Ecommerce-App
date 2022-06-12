/**
 * @description best seller component
 */

import { Container, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "../../utility/sectionTitle/SectionTitle";

// get data of best seller products
import { bestSeller } from "../../../data/bestSeller";
import ProductCard from "../../utility/products/ProductCard";
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
        <SectionTitle title={"Best Seller"} />
        <Grid container gap={3}>
          {bestSellerData}
        </Grid>
      </Container>
    </>
  );
};

export default BestSeller;
