import { Stack, Typography } from "@mui/material";
/**
 * @description this is the container of hot deals which contains set of ProductCard components
 */

import React from "react";
// styled components
import { HotDealsWrapper, HotDealsItems } from "../../../styles/home/hotdeals";
// ProductCard
import ProductCard from "../../utility/products/ProductCard";
// hotdeals data
import { hotDealsData } from "../../../data/hotDeals";
// react-router-dom
import { Link } from "react-router-dom";
const HotDeals = () => {
  // map through hot deals data
  const [hotDeals, setHotDeals] = React.useState([]);

  React.useEffect(() => {
    setHotDeals(hotDealsData);
  }, []);

  // map throught hotDeals state

  const hotDealsDataItems = hotDeals.map((deal) => (
    <Link to="/productdetails/1111" style={{ textDecoration: "none" }}>
      <ProductCard key={deal.id} productData={deal} />
    </Link>
  ));

  return (
    <HotDealsWrapper>
      {/* hotdeals section title */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: "100%", padding: "1rem" }}
      >
        <Typography
          variant="h2"
          sx={{ color: "#fff", fontSize: 40, fontWeight: 700 }}
        >
          Hot deals
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "#fff", fontSize: 20, fontWeight: 700 }}
        >
          More..
        </Typography>
      </Stack>
      {/* hotdeals section items */}
      <HotDealsItems>{hotDealsDataItems}</HotDealsItems>
    </HotDealsWrapper>
  );
};

export default HotDeals;
