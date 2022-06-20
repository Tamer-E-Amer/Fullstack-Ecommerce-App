/**
 * @description product List that appears in all products page
 */

import React from "react";
// mui components
import { Button, Grid, Stack } from "@mui/material";
// app components
import RecentlyAddedCard from "../../home/recentlyAdded/RecentlyAddedCard";
// recently added product data
import { recentlyAddedData } from "../../../data/recentlyAdded";
import PaginateComponent from "../../utility/paginatComponent/PaginateComponent";

const ProductList = () => {
  // map through recently added data
  const recentlyAddedCards = recentlyAddedData.map((card) => {
    return (
      <Grid item key={card.id}>
        <RecentlyAddedCard cardData={card} />
      </Grid>
    );
  });
  return (
    <div>
      <Grid container gap={3} justifyContent="center" alignItems="center">
        {recentlyAddedCards}
      </Grid>
      <Stack justifyContent="center" alignItems="center" m={5}> 
      <PaginateComponent/>
      </Stack>
    </div>
  );
};

export default ProductList;
