/**
 * @description all products page
 */

import React from "react";
import Navbar from "../../components/utility/appbar";
import Footer from "../../components/utility/footer/Footer";
import PageHeader from "../../components/utility/pageHeader/PageHeader";
// img
import headerImg1 from "../../assets/imgs/headerImg1.png";
import ProductsCountSortViewBar from "../../components/allProducts/productsCountSortViewBar/ProductsCountSortViewBar";
import FilterProductsSideBar from "../../components/allProducts/filterProductsSideBar/FilterProductsSideBar";
import { Container, Stack, Box } from "@mui/material";
import ProductList from "../../components/allProducts/productList/ProductList";
const AllProducts = () => {
  return (
    <>
      <Navbar />
      <PageHeader title="Best seller Products" img={headerImg1} />
      <Container>
        <ProductsCountSortViewBar />
        <Stack direction={{ md: "row", xs: "column" }}>
          <FilterProductsSideBar />
          <ProductList />
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default AllProducts;
