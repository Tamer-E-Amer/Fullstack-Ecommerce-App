/**
 * @description recently added section
 */

import React from "react";
// app components
import SectionTitle from "../../utility/sectionTitle/SectionTitle";
// mui components
import { Button, Grid, Stack } from "@mui/material";
// recently added product data
import { recentlyAddedData } from "../../../data/recentlyAdded";
import RecentlyAddedCard from "./RecentlyAddedCard";
//router dom
import { Link } from "react-router-dom";
const RecentlyAdded = () => {
  // map through recently added data
  const recentlyAddedCards = recentlyAddedData.map((card) => {
    return (
      <Grid item key={card.id}>
        <Link to="/productdetails/1111" style={{ textDecoration: "none" }}>
          <RecentlyAddedCard cardData={card} />
        </Link>
      </Grid>
    );
  });
  return (
    <>
      <SectionTitle title={"Recently added"} width={240} />
      <Grid container gap={3} justifyContent="center" alignItems="center">
        {recentlyAddedCards}
      </Grid>
      <Stack justifyContent="center" alignItems="center" m={5}>
        <Link to="/allproducts" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: 240, height: 50, color: "#fff" }}
          >
            More...
          </Button>
        </Link>
      </Stack>
    </>
  );
};

export default RecentlyAdded;
